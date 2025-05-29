import VR from "../atoms/vertical-rule";
import "./chart-area.css";
import down from "/caret-down-grey.svg";
import candlestick from "/candlestick.svg";
import undo from "/undo.svg";
import redo from "/redo.svg";
import { useEffect, useRef, useState } from "react";

const ChartArea = ({ mobile }: { mobile?: boolean }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [windowWidth, setWindowWidth] = useState<number | null>(null);
  console.log(windowWidth);

  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        const width = window.innerWidth;
        setWindowWidth(width - 560);
      }
    };
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div ref={containerRef} className={mobile ? "" : "chart_container"}>
      <div
        style={
          !mobile && windowWidth ? { width: `${windowWidth}px` } : undefined
        }
        className={`chart_tabs ${mobile ? "chart_tabs--mobile" : ""}`}
      >
        <div className="chart_tab">Time</div>
        <div className="chart_tab chart_tab--active">1H</div>
        <div className="chart_tab">2H</div>
        <div className="chart_tab">4H</div>
        <div className="chart_tab">1D</div>
        <div className="chart_tab">1W</div>
        <div className="chart_tab">1M</div>
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
    </div>
  );
};

export default ChartArea;
