import "./exchange-page.css";
import Header from "../organisms/header";
import MarketInfo from "../organisms/market-info";
import OrderBook from "../templates/order-book";
import BuyAndSell from "../templates/buy-and-sell";
import ChartArea from "../templates/chart-area";
import OrdersArea from "../templates/orders-area";
import MobileLayout from "../templates/mobile-layout";
import { useEffect, useState } from "react";

const ExchangePage = () => {
  const [isMobile, setIsMobile] = useState(false);
  console.log(isMobile);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 1024;
      setIsMobile(mobile);
    };
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="exchange_page ">
      <Header />
      <MarketInfo />
      <div className="exchange-page_layout desktop">
        <div className="exchange-page_main-column">
          <div className="exchange-page_chart-order">
            <ChartArea />
            <OrderBook />
          </div>
          <OrdersArea />
        </div>
        <BuyAndSell />
      </div>
      {isMobile && <MobileLayout />}
    </div>
  );
};

export default ExchangePage;
