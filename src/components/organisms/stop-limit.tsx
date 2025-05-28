import "./buy-limit.css";
import Input from "../molecules/input";
import CurrencySelect from "./currency-select";
import Button from "../atoms/button";
import VR from "../atoms/vertical-rule";

const StopLimit = () => {
  return (
    <div className="buy-limit">
      <Input label="Trigger Price" />
      <Input label="Limit Price" />
      <Input label="Amount" />
      <Input label="Type" variant="dropdown" />

      <div className="buy-limit_group buy-limit_group--between">
        <p>Total</p>
        <p>0.00</p>
      </div>
      <Button variant="gradient">Buy BTC</Button>
      <VR className="vr--horizontal" />
      <div>
        <div className="buy-limit_group buy-limit_group--between">
          Total account value
          <CurrencySelect />
        </div>

        <p className="buy-limit_value">0.00</p>

        <div className="buy-limit_group buy-limit_group--between">
          <div className="buy-limit_group buy-limit_group--column">
            Open Orders
            <p className="buy-limit_value">0.00</p>
          </div>

          <div className="buy-limit_group buy-limit_group--column">
            Available
            <p className="buy-limit_value">0.00</p>
          </div>
        </div>
      </div>
      <Button variant="blue">Deposit</Button>
    </div>
  );
};

export default StopLimit;
