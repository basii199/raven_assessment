import { useState } from "react";
import VR from "../atoms/vertical-rule";
import "./orders-area.css";

const OrdersArea = () => {
  const [activeTab, setActiveTab] = useState("Open Orders");

  return (
    <div className="orders-area">
      <div className="orders-area_scroll-wrapper">
        <div className="order orders-area_tabs-container">
          <div className="order_tabs orders-area_tabs">
            <div
              onClick={() => setActiveTab("Open Orders")}
              className={`order_tab orders-area_tab ${
                activeTab === "Open Orders" ? "order_tab--active" : ""
              }`}
            >
              Open Orders
            </div>

            <VR className="orders_vr" />

            <div
              onClick={() => setActiveTab("Positions")}
              className={`order_tab orders-area_tab ${
                activeTab === "Positions" ? "order_tab--active" : ""
              }`}
            >
              Positions
            </div>

            <VR className="orders_vr" />

            <div
              onClick={() => setActiveTab("Order History")}
              className={`order_tab orders-area_tab ${
                activeTab === "Order History" ? "order_tab--active" : ""
              }`}
            >
              Order History
            </div>

            <VR className="orders_vr" />

            <div
              onClick={() => setActiveTab("Trade History")}
              className={`order_tab orders-area_tab ${
                activeTab === "Trade History" ? "order_tab--active" : ""
              }`}
            >
              Trade History
            </div>
          </div>
        </div>
      </div>

      <div className="orders-area_content">
        <p className="orders-area_content-title">No {activeTab}</p>
        <p className="orders-area_content-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id pulvinar
          nullam sit imperdiet pulvinar.
        </p>
      </div>
    </div>
  );
};

export default OrdersArea;
