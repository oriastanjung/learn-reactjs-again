import React from "react";
import "./index.css";
import ChartBar from "../ChartBar";

function ChartBase(props) {
  const dataChartsValue = props.dataCharts.map(dataChart => dataChart.value);
  const totalMaxValue = Math.max(...dataChartsValue);
  return (
    <div className="chart">
      {props.dataCharts.map((dataChart) => {
        return (
          <ChartBar
            key={dataChart.label}
            valueBar={dataChart.value}
            maxValue={totalMaxValue}
            label={dataChart.label}
          />
        );
      })}
    </div>
  );
}

export default ChartBase;
