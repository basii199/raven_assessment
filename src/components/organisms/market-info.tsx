import "./market-info.css";
import VR from "../atoms/vertical-rule";
import CoinInfo from "../molecules/coin-info";
import CoinPair from "../molecules/coin-pair";

const MarketInfo = () => {
  return (
    <div className="market-info">
      <CoinPair />
      <VR className="market-info_vr" />
      <CoinInfo />
    </div>
  );
};

export default MarketInfo;
