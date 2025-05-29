import { useEffect, useRef } from "react";
import {
  CandlestickSeries,
  HistogramSeries,
  ColorType,
  createChart,
  type IChartApi,
} from "lightweight-charts";
import type { Extended } from "../templates/chart-area";

type Props = {
  data: Extended[];
  width: number;
};

const Chart = ({ data, width }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const chartRef = useRef<IChartApi | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const chart = createChart(containerRef.current, {
      layout: {
        background: { type: ColorType.Solid, color: "#262932" },
        textColor: "#A7B1BC",
      },
      grid: {
        vertLines: {
          color: "transparent",
          visible: false,
        },
        horzLines: {
          color: "transparent",
          visible: false,
        },
      },
      width: width,
      height: 500,
      rightPriceScale: {
        borderColor: "#A7B1BC",
        borderVisible: true,
        scaleMargins: {
          top: 0.1,
          bottom: 0.3,
        },
        textColor: "#A7B1BC",
      },
      timeScale: {
        borderColor: "#A7B1BC",
        timeVisible: true,
        secondsVisible: true,
      },
    });

    chartRef.current = chart;

    const candleChart = chart.addSeries(CandlestickSeries, {
      upColor: "#00c076",
      downColor: "#ff6838",
      borderVisible: false,
      wickUpColor: "#00c076",
      wickDownColor: "#ff6838",
    });
    candleChart.priceScale().applyOptions({
      scaleMargins: {
        top: 0.1,
        bottom: 0.3,
      },
    });

    candleChart.setData(data);

    const volumeSeries = chart.addSeries(HistogramSeries, {
      priceFormat: {
        type: "volume",
      },
      priceScaleId: "",
    });
    volumeSeries.priceScale().applyOptions({
      scaleMargins: {
        top: 0.85,
        bottom: 0,
      },
    });

    const volumeData = data.map((candle) => ({
      time: candle.time,
      value: candle.volume,
      color: candle.close > candle.open ? "#31413C" : "#4A2C25",
    }));

    volumeSeries.setData(volumeData);

    chart.timeScale().setVisibleLogicalRange({
      from: data.length - 200,
      to: data.length,
    });

    return () => {
      chart.remove();
    };
  }, [data]);

  useEffect(() => {
    if (chartRef.current && width > 100) {
      chartRef.current.resize(width, 500);
    }
  }, [width]);

  return (
    <div
      ref={containerRef}
      style={{
        width: "100%",
        height: "100%",
        position: "relative",
      }}
    />
  );
};

export default Chart;
