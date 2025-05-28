import "./mobile-layout.css";
import { useState } from "react";
import OrderBook from "./order-book";
import ChartArea from "./chart-area";
import OrdersArea from "./orders-area";
import BuyAndSell from "./buy-and-sell";
import Button from "../atoms/button";

const MobileLayout = ({ hidden }: { hidden?: boolean }) => {
  type Tabs = "Charts" | "Order Book" | "Recent Trades";

  const [activeTab, setActiveTab] = useState<Tabs>("Order Book");
  const [openBuy, setOpenBuy] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const text = (e.target as HTMLElement).textContent;
    if (text === "Order Book" || text === "Recent Trades" || text === "Charts")
      setActiveTab(text);
  };

  if (hidden) {
    return <div style={{ display: "none" }}></div>;
  }

  return (
    <div className="mobile-layout--wrapper">
      <div className={`mobile-layout`}>
        <div onClick={handleClick} className="order_tabs">
          <div
            className={`order_tab ${
              activeTab === "Charts" ? "order_tab--active" : ""
            }`}
          >
            Charts
          </div>

          <div
            className={`order_tab ${
              activeTab === "Order Book" ? "order_tab--active" : ""
            }`}
          >
            Order Book
          </div>

          <div
            onClick={handleClick}
            className={`order_tab ${
              activeTab === "Recent Trades" ? "order_tab--active" : ""
            }`}
          >
            Recent Trades
          </div>
        </div>
        {activeTab === "Charts" && <ChartArea />}
        {activeTab === "Order Book" && <OrderBook mobile />}
      </div>
      <OrdersArea />

      <div className="bs-button_group">
        <Button
          onClick={() => setOpenBuy(true)}
          className="bs-button"
          variant="green"
        >
          Buy
        </Button>

        <Button
          onClick={() => setOpenBuy(true)}
          className="bs-button"
          variant="red"
        >
          Sell
        </Button>
      </div>

      {openBuy && (
        <div
          onClick={() => setOpenBuy(false)}
          className="mobile-layout--backdrop"
        >
          <div className="mobile-layout--overlay">
            <BuyAndSell mobile />
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileLayout;
