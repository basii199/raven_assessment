import VR from "../atoms/vertical-rule";
import "./coin-info.css";
import clock from "/clock.svg";
import arrowUp from "/arrow-up.svg";
import arrowDown from "/arrow-down.svg";
import chart from "/chart.svg";
import React from "react";

const data = [
  {
    imgUrl: clock,
    label: "24h change",
    value: "520.80 +1.25%",
  },
  {
    imgUrl: arrowUp,
    label: "24h high",
    value: "520.80 +1.25%",
  },
  {
    imgUrl: arrowDown,
    label: "24h low",
    value: "520.80 +1.25%",
  },
  {
    imgUrl: chart,
    label: "24h volume",
    value: "75,655.26",
  },
];

const CoinInfo = () => {
  return (
    <div className="info hide-scrollbar">
      {data.map(({ imgUrl, label, value }, index) => (
        <React.Fragment key={index}>
          <div className="info_group">
            <div className="info_sub">
              <img src={imgUrl} alt={label} />
              <p className="info_label">{label}</p>
            </div>

            <p
              className={`info_value ${
                index === 0 ? "info_value--green" : ""
              } `}
            >
              {value}
            </p>
          </div>
          {index !== data.length - 1 && <VR />}
        </React.Fragment>
      ))}
    </div>
  );
};

export default CoinInfo;
