import { formatPercent, formatPrice } from "@/utils/numberFormats";
import VR from "../atoms/vertical-rule";
import "./coin-list.css";
import search from "/search.svg";

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
  const handleSelectMarket = (symbol: string) => {
    updateCoin(symbol);
    close();
  };

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
          className="market__search--input"
          type="text"
          placeholder="Search"
        />
      </div>
      <VR className="market_vr" />
      <div className="market__filters">
        <div className="market__filter market_filter--active">All</div>
        <div className="market__filter">USD</div>
        <div className="market__filter">BTC</div>
      </div>
      <VR className="market_vr" />

      <div className="market__list hide-scrollbar">
        <table className="market__table">
          <tbody>
            {marketData.map((item, i) => (
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
                    {item.baseAsset} - {item.quoteAsset}
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
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CoinsList;
