import arrowUp from "/green-arrow-up.svg";
import "./buy-section.css";
import type { SectionProps } from "./sell-section";
import { formatPrice } from "@/utils/numberFormats";

const BuySection = ({ data }: SectionProps) => {
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
      <tr>
        <td colSpan={3}>
          <div className="buy_heading">
            {sellData[0].price}
            <img src={arrowUp} alt="arrow up" />
            <span className="buy_heading--span">{sellData[1].price}</span>
          </div>
        </td>
      </tr>

      {sellData.map(({ price, quantity, total, overlay }, index) => {
        const position = 100 - overlay;
        return (
          <tr className="table_row--body" key={index}>
            <td className="table_cell--body table_cell--green">{price}</td>
            <td className="table_cell--body table_cell--body--right">
              {quantity}
            </td>
            <td className="table_cell--body table_cell--body--right">
              {total}
            </td>

            <div
              style={{ left: `${position}%` }}
              className="table_overlay table_overlay--green"
            />
          </tr>
        );
      })}
    </>
  );
};

export default BuySection;
