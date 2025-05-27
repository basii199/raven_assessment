import "./exchange-page.css";
import Header from "../organisms/header";
import MarketInfo from "../organisms/market-info";
import OrderBook from "../templates/order-book";

const ExchangePage = () => {
  return (
    <div className="exchange_page">
      <Header />
      <MarketInfo />
      <OrderBook />
    </div>
  );
};

export default ExchangePage;
