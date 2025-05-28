import DropDown from "../molecules/dropdown";
import "./currency-select.css";

import nigeria from "/nigeria.svg";
import america from "/america.svg";
import britain from "/britain.svg";
import europe from "/europe.svg";

const data = [
  {
    iconUrl: nigeria,
    currency: "Nigerian Naira",
    abbr: "NGN",
  },
  {
    iconUrl: britain,
    currency: "Britain Pounds",
    abbr: "GBP",
  },
  {
    iconUrl: america,
    currency: "US Dollars",
    abbr: "USD",
  },
  {
    iconUrl: europe,
    currency: "European Euros",
    abbr: "EUR",
  },
];

const CurrencySelect = () => {
  return (
    <DropDown
      dropDownItems={data.map((el) => {
        return {
          item: (
            <div className="currency-select">
              <img src={el.iconUrl} alt={el.currency} />

              <div className="currency-select_info">
                {el.currency}
                <span>{el.abbr}</span>
              </div>
            </div>
          ),
          value: el.abbr,
        };
      })}
      init="NGN"
    />
  );
};

export default CurrencySelect;
