import React from "react";
import pieChart from './pieChart.png';
function WorkersPieChart() {
  return (
    <div className="workers__pie__chart">
      <div className="workers_pie__chart__info">
        <h5 className="workers_pie__chart__heading">Chapter Wise Status</h5>
        <div className="workers__pie__chart__circle">
         <img src={pieChart} alt="piechart"/>
        </div>
      </div>
    </div>
  );
}

export default WorkersPieChart;
