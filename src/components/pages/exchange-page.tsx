import "./exchange-page.css";
import Header from "../organisms/header";
import MarketInfo from "../organisms/market-info";
import OrderBook from "../templates/order-book";
import BuyAndSell from "../templates/buy-and-sell";

const ExchangePage = () => {
  return (
    <div className="exchange_page">
      <Header />
      <MarketInfo />
      <div style={{ display: "flex", gap: "5px" }}>
        <OrderBook />
        <BuyAndSell />
      </div>
    </div>
  );
};

export default ExchangePage;
