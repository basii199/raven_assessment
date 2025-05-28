import BuyLimit from "../organisms/buy-limit";
import BuyMarket from "../organisms/buy-market";
import StopLimit from "../organisms/stop-limit";
import "./buy-and-sell.css";

import { useState } from "react";

type Section = "buy" | "sell";
type Tabs = "buy limit" | "buy market" | "stop limit";

const BuyAndSell = ({ mobile }: { mobile?: boolean }) => {
  const [activeSection, setActiveSection] = useState<Section>("buy");
  const [activeTab, setActiveTab] = useState<Tabs>("buy limit");

  return (
    <div className={`order bs ${mobile ? "bs--full" : ""}`}>
      <div className="order_tabs">
        <div
          onClick={() => setActiveSection("buy")}
          className={`order_tab ${
            activeSection === "buy" ? "order_tab--active bs_active--green" : ""
          }`}
        >
          Buy
        </div>

        <div
          onClick={() => setActiveSection("sell")}
          className={`order_tab ${
            activeSection === "sell" ? "order_tab--active bs_active--red" : ""
          }`}
        >
          Sell
        </div>
      </div>

      <div className="bs_tabs">
        <div
          onClick={() => setActiveTab("buy limit")}
          className={`bs_tab ${
            activeTab === "buy limit" ? "bs_tab--active" : ""
          }`}
        >
          Limit
        </div>
        <div
          onClick={() => setActiveTab("buy market")}
          className={`bs_tab ${
            activeTab === "buy market" ? "bs_tab--active" : ""
          }`}
        >
          Market
        </div>
        <div
          onClick={() => setActiveTab("stop limit")}
          className={`bs_tab ${
            activeTab === "stop limit" ? "bs_tab--active" : ""
          }`}
        >
          Stop Limit
        </div>
      </div>

      {activeTab === "buy limit" && <BuyLimit />}
      {activeTab === "buy market" && <BuyMarket />}
      {activeTab === "stop limit" && <StopLimit />}
    </div>
  );
};

export default BuyAndSell;
