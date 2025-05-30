import { useEffect, useState } from "react";
import BuySection from "../molecules/buy-section";
import SellSection from "../molecules/sell-section";
import "./order-book-table.css";
import { useCoinContext } from "@/context/coin-context";

export type Display = "both" | "buy" | "sell";

type TableProps = {
  show: Display;
};

export type OrderBookSet = {
  price: number;
  quantity: number;
  total: number;
};

type OrderBook = {
  bids: OrderBookSet[];
  asks: OrderBookSet[];
};

const OrderBookTable = ({ show }: TableProps) => {
  const [orderBook, setOrderBook] = useState<OrderBook>();

  const { symbol } = useCoinContext();

  useEffect(() => {
    const fetchOrderBook = async () => {
      const limit = 5;

      const res = await fetch(
        `https://api.binance.com/api/v3/depth?symbol=${symbol}&limit=${limit}`
      );
      const data = await res.json();

      const formatted = {
        bids: data.bids.map(
          ([price, qty]: [string, string]): OrderBookSet => ({
            price: Number(price),
            quantity: Number(qty),
            total: Number(price) * Number(qty),
          })
        ),
        asks: data.asks.map(
          ([price, qty]: [string, string]): OrderBookSet => ({
            price: Number(price),
            quantity: Number(qty),
            total: Number(price) * Number(qty),
          })
        ),
      };

      setOrderBook(formatted);
    };

    fetchOrderBook();
  }, [symbol]);

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
          {(show === "both" || show === "sell") && (
            <SellSection data={orderBook?.asks} />
          )}
          {(show === "both" || show === "buy") && (
            <BuySection data={orderBook?.bids} />
          )}
        </tbody>
      </table>
    </div>
  );
};

export default OrderBookTable;
