import VR from "../atoms/vertical-rule";
import "./chart-area.css";
import down from "/caret-down-grey.svg";
import candlestick from "/candlestick.svg";
import undo from "/undo.svg";
import redo from "/redo.svg";
import { useEffect, useRef, useState } from "react";
import { type CandlestickData } from "lightweight-charts";
import Chart from "../organisms/chart";

type Kline = [
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number
];

export interface Extended extends CandlestickData {
  volume?: number;
}

const ChartArea = ({ mobile }: { mobile?: boolean }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [windowWidth, setWindowWidth] = useState<number | null>(null);
  const [data, setData] = useState<Extended[]>([]);
  const [interval, setInterval] = useState<string>("1d");

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        `https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=${interval}&limit=500`
      );
      const rawData = await res.json();
      const cleanData = rawData.map((entry: Kline) => {
        return {
          open: Number(entry[1]),
          high: Number(entry[2]),
          low: Number(entry[3]),
          close: Number(entry[4]),
          time: entry[0] / 1000,
          volume: Number(entry[5]),
        };
      });
      setData(cleanData);
    };
    fetchData();
  }, [interval]);

  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        const width = window.innerWidth;
        const safeWidth = mobile ? width - 50 : width - 560;

        setWindowWidth(Math.max(safeWidth, 100));
      }
    };
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [mobile]);

  return (
    <div ref={containerRef} className={mobile ? "" : "chart_container"}>
      <div
        style={
          !mobile && windowWidth ? { width: `${windowWidth}px` } : undefined
        }
        className={`chart_tabs hide-scrollbar ${
          mobile ? "chart_tabs--mobile" : ""
        }`}
      >
        <div className="chart_tab">Time</div>
        <div
          onClick={() => setInterval("1h")}
          className={`chart_tab ${
            interval === "1h" ? "chart_tab--active" : ""
          }`}
        >
          1H
        </div>
        <div
          onClick={() => setInterval("2h")}
          className={`chart_tab ${
            interval === "2h" ? "chart_tab--active" : ""
          }`}
        >
          2H
        </div>
        <div
          onClick={() => setInterval("4h")}
          className={`chart_tab ${
            interval === "4h" ? "chart_tab--active" : ""
          }`}
        >
          4H
        </div>
        <div
          onClick={() => setInterval("1d")}
          className={`chart_tab ${
            interval === "1d" ? "chart_tab--active" : ""
          }`}
        >
          1D
        </div>
        <div
          onClick={() => setInterval("1w")}
          className={`chart_tab ${
            interval === "1w" ? "chart_tab--active" : ""
          }`}
        >
          1W
        </div>
        <div
          onClick={() => setInterval("1M")}
          className={`chart_tab ${
            interval === "1M" ? "chart_tab--active" : ""
          }`}
        >
          1M
        </div>
        <img className="chart_tab" width={7} src={down} alt="caret down" />
        <VR className="chart_vr" />
        <img
          className="chart_tab"
          width={20}
          src={candlestick}
          alt="candlestick"
        />
        <VR className="chart_vr" />
        <div className="chart_tab">FX Indicators</div>
        <img className="chart_tab" width={12} src={undo} alt="undo" />
        <img className="chart_tab" width={12} src={redo} alt="redo" />
      </div>

      <Chart data={data} width={windowWidth ?? 0} />
    </div>
  );
};

export default ChartArea;
