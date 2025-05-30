import "./coin-pair.css";
import coinPair from "/coin-pair.svg";
import down from "/caret-down.svg";
import type { TickerStats } from "../organisms/market-info";
import { formatPrice } from "@/utils/numberFormats";

const CoinPair = ({ tickerStats }: { tickerStats: TickerStats }) => {
  const { lastPrice } = tickerStats;
  return (
    <div className="coin">
      <img className="coin_image" src={coinPair} alt="BTC/USDT" />

      <p className="coin_label">BTC/USDT</p>

      <img className="coin_caret" src={down} alt="caret down" />

      <p className="coin_volume">{formatPrice(lastPrice)}</p>
    </div>
  );
};

export default CoinPair;
