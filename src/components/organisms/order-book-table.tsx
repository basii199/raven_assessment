import BuySection from "../molecules/buy-section";
import SellSection from "../molecules/sell-section";
import "./order-book-table.css";

export type Display = "both" | "buy" | "sell";
interface TableProps {
  show: Display;
}

const OrderBookTable = ({ show }: TableProps) => {
  return (
    <div>
      <table className="table">
        <thead>
          <tr className="table_row--header">
            <th>
              <div className="table_cell--header cell--left">
                Price
                <p>(USDT)</p>
              </div>
            </th>
            <th>
              <div className="table_cell--header">
                Amount
                <p>(BTC)</p>
              </div>
            </th>
            <th>
              <div className="table_cell--header">Total</div>
            </th>
          </tr>
        </thead>
        <tbody>
          {(show === "both" || show === "sell") && <SellSection />}
          {(show === "both" || show === "buy") && <BuySection />}
        </tbody>
      </table>
    </div>
  );
};

export default OrderBookTable;
