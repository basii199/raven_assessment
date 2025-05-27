import "./exchange-page.css";
import Header from "../organisms/header";
import MarketInfo from "../organisms/market-info";

const ExchangePage = () => {
  return (
    <div className="exchange_page">
      <Header />
      <MarketInfo />
    </div>
  );
};

export default ExchangePage;
