import "./market-info.css";
import VR from "../atoms/vertical-rule";
import CoinInfo from "../molecules/coin-info";
import CoinPair from "../molecules/coin-pair";
import { useEffect, useState } from "react";
import { useCoinContext } from "@/context/coin-context";

export type TickerStats = {
  priceChange: number;
  priceChangePercent: number;
  lastPrice: number;
  highPrice: number;
  lowPrice: number;
  volume: number;
  quoteVolume: number;
};

const MarketInfo = () => {
  const [tickerStats, setTickerStats] = useState<TickerStats>({
    priceChange: 0,
    priceChangePercent: 0,
    lastPrice: 0,
    highPrice: 0,
    lowPrice: 0,
    volume: 0,
    quoteVolume: 0,
  });
  const { symbol } = useCoinContext();

  useEffect(() => {
    const fetchTickerStats = async () => {
      const res = await fetch(
        `https://api.binance.com/api/v3/ticker/24hr?symbol=${symbol}`
      );
      const data = await res.json();

      const stats = {
        priceChange: Number(data.priceChange),
        priceChangePercent: Number(data.priceChangePercent),
        lastPrice: Number(data.lastPrice),
        highPrice: Number(data.highPrice),
        lowPrice: Number(data.lowPrice),
        volume: Number(data.volume),
        quoteVolume: Number(data.quoteVolume),
      };

      setTickerStats(stats);
    };

    fetchTickerStats();
  }, [symbol]);

  return (
    <div className="market-info">
      <CoinPair tickerStats={tickerStats} />
      <VR className="market-info_vr" />
      <CoinInfo tickerStats={tickerStats} />
    </div>
  );
};

export default MarketInfo;
