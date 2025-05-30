import { formatPrice } from "@/utils/numberFormats";
import type { OrderBookSet } from "../organisms/order-book-table";

export type SectionProps = {
  data?: OrderBookSet[]; // array or undefined
};

const SellSection = ({ data }: SectionProps) => {
  if (!data) return <div>Load...</div>;

  const maxTotal = Math.max(...data.map((item) => item.total));

  const sellData = data.map((item) => ({
    price: formatPrice(item.price),
    quantity: item.quantity,
    total: formatPrice(item.total),
    overlay: (item.total / maxTotal) * 100,
  }));

  return (
    <>
      {sellData.map(({ price, quantity, total, overlay }, index) => {
        const position = 100 - overlay;
        return (
          <tr className="table_row--body" key={index}>
            <td className="table_cell--body table_cell--red">{price}</td>
            <td className="table_cell--body table_cell--body--right">
              {quantity}
            </td>
            <td className="table_cell--body table_cell--body--right">
              {total}
            </td>

            <div
              style={{ left: `${position}%` }}
              className="table_overlay table_overlay--red"
            />
          </tr>
        );
      })}
    </>
  );
};

export default SellSection;
