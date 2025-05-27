import "./order-book.css";
import buySell from "/buy-sell.svg";
import buyOnly from "/buy-only.svg";
import sellOnly from "/sell-only.svg";
import down from "/caret-down-grey.svg";
import OrderBookTable from "../organisms/order-book-table";
import type { Display } from "../organisms/order-book-table";
import { useState } from "react";

const OrderBook = () => {
  const [show, setShow] = useState<Display>("both");
  return (
    <div className="order">
      <div className="order_tabs">
        <div className="order_tab order_tab--active">Order Book</div>
        <div className="order_tab">Recent Trades</div>
      </div>

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
    </div>
  );
};

export default OrderBook;
