import "./coin-pair.css";
import coinPair from "/coin-pair.svg";
import down from "/caret-down.svg";
import type { TickerStats } from "../organisms/market-info";
import { formatPrice } from "@/utils/numberFormats";
import CoinsList from "./coin-list";
import { useState, useEffect } from "react";
import { useCoinContext } from "@/context/coin-context";

interface Market {
  baseAsset: string;
  quoteAsset: string;
  symbol: string;
  price: number;
  percentChange: number;
  baseIconUrl: string;
  quoteIconUrl: string;
}

interface ExchangeSymbol {
  symbol: string;
  baseAsset: string;
  quoteAsset: string;
  status: string;
}

interface TickerData {
  symbol: string;
  lastPrice: string;
  priceChangePercent: string;
}

interface ExchangeInfo {
  symbols: ExchangeSymbol[];
}

const CoinPair = ({ tickerStats }: { tickerStats: TickerStats }) => {
  const [listOpen, setListOpen] = useState<boolean>(false);
  const [coin, setCoin] = useState("BTC/USDT");
  const [marketData, setMarketData] = useState<Market[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const { lastPrice } = tickerStats;

  useEffect(() => {
    const fetchMarketData = async () => {
      try {
        setLoading(true);
        const [exchangeRes, tickerRes] = await Promise.all([
          fetch("https://api.binance.com/api/v3/exchangeInfo"),
          fetch("https://api.binance.com/api/v3/ticker/24hr"),
        ]);

        const exchangeInfo: ExchangeInfo = await exchangeRes.json();
        const tickerData: TickerData[] = await tickerRes.json();

        const usdtMarkets = exchangeInfo.symbols.filter(
          (s) => s.quoteAsset === "USDT" && s.status === "TRADING"
        );

        const merged = usdtMarkets.slice(0, 10).map((symbol) => {
          const ticker = tickerData.find((t) => t.symbol === symbol.symbol);
          return {
            baseAsset: symbol.baseAsset,
            quoteAsset: symbol.quoteAsset,
            symbol: symbol.symbol,
            price: parseFloat(ticker?.lastPrice || "0"),
            percentChange: parseFloat(ticker?.priceChangePercent || "0"),
            baseIconUrl: `https://cryptoicon-api.pages.dev/api/icon/${symbol.baseAsset.toLowerCase()}`,
            quoteIconUrl: `https://cryptoicon-api.pages.dev/api/icon/${symbol.quoteAsset.toLowerCase()}`,
          };
        });

        setMarketData(merged);
      } catch (err) {
        setError("Failed to fetch market data");
        console.error("Error fetching market data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchMarketData();
  }, []);

  const { updateSymbol } = useCoinContext();

  const handleCoinUpdate = (symbol: string) => {
    setCoin(symbol);
    const test = symbol
      .split("")
      .filter((str) => str !== "/")
      .join("");
    updateSymbol(test);
  };

  return (
    <div
      onClick={(e) => {
        if (e.target === e.currentTarget) setListOpen(!listOpen);
      }}
      className="coin"
    >
      <img className="coin_image" src={coinPair} alt="BTC/USDT" />

      <p className="coin_label">{coin}</p>

      <div
        onClick={() => {
          setListOpen(!listOpen);
        }}
        className="coin_toggle"
      >
        <img className="coin_caret" src={down} alt="caret down" />
      </div>

      <p className="coin_volume">{formatPrice(lastPrice)}</p>

      {listOpen && (
        <>
          <div className="coin_overlay">
            <CoinsList
              marketData={marketData}
              loading={loading}
              error={error}
              updateCoin={handleCoinUpdate}
              close={() => setListOpen(false)}
            />
          </div>
          <div
            onClick={(e) => {
              if (e.target === e.currentTarget) setListOpen(false);
            }}
            className="coin_backdrop"
          ></div>
        </>
      )}
    </div>
  );
};

export default CoinPair;
