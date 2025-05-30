import VR from "../atoms/vertical-rule";
import "./coin-info.css";
import clock from "/clock.svg";
import arrowUp from "/arrow-up.svg";
import arrowDown from "/arrow-down.svg";
import chart from "/chart.svg";
import React from "react";
import type { TickerStats } from "../organisms/market-info";
import { formatPrice, formatPercent } from "@/utils/numberFormats";

const CoinInfo = ({ tickerStats }: { tickerStats: TickerStats }) => {
  const {
    priceChange,
    priceChangePercent,
    highPrice,
    lowPrice,
    lastPrice,
    volume,
  } = tickerStats;

  function calculateFormattedPriceChange(
    price: number,
    lastPrice: number
  ): string {
    const priceDiffPercent = ((price - lastPrice) / lastPrice) * 100;
    return `${formatPrice(price)} ${formatPercent(priceDiffPercent)}`;
  }

  const sections = [
    {
      imgUrl: clock,
      label: "24h change",
      value: `${Math.abs(priceChange)} ${formatPercent(priceChangePercent)}`,
    },
    {
      imgUrl: arrowUp,
      label: "24h high",
      value: calculateFormattedPriceChange(highPrice, lastPrice),
    },
    {
      imgUrl: arrowDown,
      label: "24h low",
      value: calculateFormattedPriceChange(lowPrice, lastPrice),
    },
    {
      imgUrl: chart,
      label: "24h volume",
      value: `${formatPrice(volume)}`,
    },
  ];

  return (
    <div className="info hide-scrollbar">
      {sections.map(({ imgUrl, label, value }, index) => (
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
          {index !== sections.length - 1 && <VR />}
        </React.Fragment>
      ))}
    </div>
  );
};

export default CoinInfo;
