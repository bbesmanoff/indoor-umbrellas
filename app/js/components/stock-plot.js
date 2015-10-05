import React, { Component } from 'react';

export default class StockPlot extends Component {
  componentDidMount() {
    // Get the context of the canvas element we want to select
    var ctx = document.getElementById("myChart").getContext("2d");
    var columnIndex = this.props.dataset.column_names.indexOf(this.props.column);
    var dateColumnPairs = this.props.dataset.data.map((o) => {
      return [o[0], o[columnIndex]];
    }).reverse().slice(-this.props.number);
    var dates = dateColumnPairs.map((e) => {
      return e[0];
    })
    var columnValues = dateColumnPairs.map((e) => {
      return e[1];
    })
    var chartData = {
      labels: dates,
      datasets: [
      {
          label: `${this.props.dataset.dataset_code}`,
          fillColor: "rgba(39, 128, 227, 0.2)",
          strokeColor: "rgba(39, 128, 227, 1)",
          pointColor: "rgba(39, 128, 227, 1)",
          pointStrokeColor: "#fff",
          pointHighlightFill: "#fff",
          pointHighlightStroke: "rgba(39, 128, 227,1)",
          data: columnValues
      }]
    };

    var myLineChart = new Chart(ctx).Line(chartData);
  }

  render() {
    return (
      <canvas id="myChart" width={this.props.width} height={this.props.height}></canvas>
    );
  }
}
