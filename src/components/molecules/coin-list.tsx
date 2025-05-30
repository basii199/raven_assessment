import { formatPercent, formatPrice } from "@/utils/numberFormats";
import VR from "../atoms/vertical-rule";
import "./coin-list.css";
import search from "/search.svg";
import { useState } from "react";

interface Market {
  baseAsset: string;
  quoteAsset: string;
  symbol: string;
  price: number;
  percentChange: number;
  baseIconUrl: string;
  quoteIconUrl: string;
}

interface CoinsListProps {
  marketData: Market[];
  loading: boolean;
  error: string | null;
  close: () => void;
  updateCoin: (coin: string) => void;
}

const CoinsList = ({
  marketData,
  loading,
  error,
  close,
  updateCoin,
}: CoinsListProps) => {
  const [searchText, setSearchText] = useState("");
  const [filter, setFilter] = useState<"all" | "usd" | "btc">("all");

  const handleSelectMarket = (symbol: string) => {
    updateCoin(symbol);
    close();
  };

  const filteredData = marketData.filter((item) => {
    const matchesSearch =
      item.baseAsset.toLowerCase().includes(searchText.toLowerCase()) ||
      item.quoteAsset.toLowerCase().includes(searchText.toLowerCase()) ||
      item.symbol.toLowerCase().includes(searchText.toLowerCase());

    const matchesFilter =
      filter === "all" ||
      (filter === "usd" && item.quoteAsset === "USDT") ||
      (filter === "usd" && item.baseAsset === "USDT") ||
      (filter === "btc" && item.quoteAsset === "BTC") ||
      (filter === "btc" && item.baseAsset === "BTC");

    return matchesSearch && matchesFilter;
  });

  if (loading) {
    return (
      <div className="market">
        <h2 className="market__title">Select Market</h2>
        <div className="market__loading">Loading markets...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="market">
        <h2 className="market__title">Select Market</h2>
        <div className="market__error">{error}</div>
      </div>
    );
  }

  return (
    <div className="market">
      <h2 className="market__title">Select Market</h2>
      <div className="market__search">
        <img className="market__search--icon" src={search} alt="search icon" />
        <input
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="market__search--input"
          type="text"
          placeholder="Search"
        />
      </div>
      <VR className="market_vr" />
      <div className="market__filters">
        <div
          onClick={() => setFilter("all")}
          className={`market__filter ${
            filter === "all" ? "market_filter--active" : ""
          }`}
        >
          All
        </div>
        <div
          onClick={() => setFilter("usd")}
          className={`market__filter ${
            filter === "usd" ? "market_filter--active" : ""
          }`}
        >
          USD
        </div>
        <div
          onClick={() => setFilter("btc")}
          className={`market__filter ${
            filter === "btc" ? "market_filter--active" : ""
          }`}
        >
          BTC
        </div>
      </div>
      <VR className="market_vr" />

      <div className="market__list hide-scrollbar">
        <table className="market__table">
          <tbody>
            {filteredData.length > 0 ? (
              filteredData.map((item, i) => (
                <tr
                  onClick={() =>
                    handleSelectMarket(`${item.baseAsset}/${item.quoteAsset}`)
                  }
                  className="market__row"
                  key={i}
                >
                  <td className="market__pair">
                    <div className="market__icons">
                      <img
                        className="market__icon market__icon--left"
                        src={item.baseIconUrl}
                        alt={item.baseAsset}
                      />
                      <img
                        className="market__icon market__icon--right"
                        src={item.quoteIconUrl}
                        alt={item.quoteAsset}
                      />
                    </div>
                    <span className="market__symbol">
                      {item.baseAsset}/{item.quoteAsset}
                    </span>
                  </td>
                  <td className="market__price">${formatPrice(item.price)}</td>
                  <td
                    className={`market__change ${
                      item.percentChange >= 0
                        ? "market__change--up"
                        : "market__change--down"
                    }`}
                  >
                    {item.percentChange >= 0 ? "+" : ""}
                    {formatPercent(item.percentChange)}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={3} className="market__no-results">
                  No matching coins found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CoinsList;
