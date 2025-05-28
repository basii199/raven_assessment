import "./order-book.css";
import buySell from "/buy-sell.svg";
import buyOnly from "/buy-only.svg";
import sellOnly from "/sell-only.svg";
import down from "/caret-down-grey.svg";
import OrderBookTable from "../organisms/order-book-table";
import type { Display } from "../organisms/order-book-table";
import { useState } from "react";

const OrderBook = ({
  mobile,
  className,
}: {
  mobile?: boolean;
  className?: string;
}) => {
  type Tabs = "Order Book" | "Recent Trades";

  const [show, setShow] = useState<Display>("both");
  const [activeTab, setActiveTab] = useState<Tabs>("Order Book");

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const text = (e.target as HTMLElement).textContent;
    if (text === "Order Book" || text === "Recent Trades") setActiveTab(text);
  };

  return (
    <div className={`${mobile ? "order_mobile" : "order"} ${className}`}>
      {!mobile && (
        <div onClick={handleClick} className="order_tabs">
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
      )}

      {activeTab === "Order Book" && (
        <>
          <div className="order_toggles">
            <div
              onClick={() => setShow("both")}
              className={`order_toggle ${
                show === "both" ? "order_toggle--active" : ""
              } `}
            >
              <img src={buySell} alt="filter buy and sell" />
            </div>

            <div
              onClick={() => setShow("buy")}
              className={`order_toggle ${
                show === "buy" ? "order_toggle--active" : ""
              } `}
            >
              <img src={buyOnly} alt="filter buy" />
            </div>

            <div
              onClick={() => setShow("sell")}
              className={`order_toggle ${
                show === "sell" ? "order_toggle--active" : ""
              } `}
            >
              <img src={sellOnly} alt="filter sell" />
            </div>

            <div className="order_dropdown">
              10
              <img src={down} alt="caret down" />
            </div>
          </div>

          <OrderBookTable show={show} />
        </>
      )}
    </div>
  );
};

export default OrderBook;
