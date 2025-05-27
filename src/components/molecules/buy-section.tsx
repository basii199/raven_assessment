import arrowUp from "/green-arrow-up.svg";
import "./buy-section.css";

const sellData = [
  {
    price: 36920.12,
    amount: 0.758965,
    total: 28020.98,
    overlay: 100,
  },
  {
    price: 36920.12,
    amount: 0.758965,
    total: 28020.98,
    overlay: 70,
  },
  {
    price: 36920.12,
    amount: 0.758965,
    total: 28020.98,
    overlay: 60,
  },
  {
    price: 36920.12,
    amount: 0.758965,
    total: 28020.98,
    overlay: 0,
  },
  {
    price: 36920.12,
    amount: 0.758965,
    total: 28020.98,
    overlay: 70,
  },
  {
    price: 36920.12,
    amount: 0.758965,
    total: 28020.98,
    overlay: 70,
  },
];

const BuySection = () => {
  return (
    <>
      <tr>
        <td colSpan={3}>
          <div className="buy_heading">
            36,641.20
            <img src={arrowUp} alt="arrow up" />
            <span className="buy_heading--span">36,641.20</span>
          </div>
        </td>
      </tr>

      {sellData.map(({ price, amount, total, overlay }, index) => {
        const position = 100 - overlay;
        return (
          <tr className="table_row--body" key={index}>
            <td className="table_cell--body table_cell--green">{price}</td>
            <td className="table_cell--body">{amount}</td>
            <td className="table_cell--body">{total}</td>

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
