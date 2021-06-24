import React from "react";
import Plot from "react-plotly.js";

const LineChart = (props) => {
  return (
    <Plot
      data={[
        {
          x: [props.date4, props.date3, props.date2, props.date1],
          y: [props.weight4, props.weight3, props.weight2, props.weight1],
          type: "scatter",
        },
      ]}
      layout={{ width: 1100, height: 400, title: "Your latest weight" }}
    />
  );
};

export default LineChart;
