const sellData = [
  {
    price: 36920.12,
    amount: 0.758965,
    total: 28020.98,
    overlay: 45,
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
    overlay: 100,
  },
];

const SellSection = () => {
  return (
    <>
      {sellData.map(({ price, amount, total, overlay }, index) => {
        const position = 100 - overlay;
        return (
          <tr className="table_row--body" key={index}>
            <td className="table_cell--body table_cell--red">{price}</td>
            <td className="table_cell--body">{amount}</td>
            <td className="table_cell--body">{total}</td>

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
