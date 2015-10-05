import React, { Component } from 'react';

export default class StockPlot extends Component {
  componentDidMount() {
    // Get the context of the canvas element we want to select
    var ctx = document.getElementById("myChart").getContext("2d");
    columnIndex = this.props.dataset.column_names.indexOf(this.props.column);
    dateColumnPairs = this.props.dataset.data.map((o) => {
      return o.map((data) => {
        return [data[0], data[columnIndex]];
      });
    }).reverse();
    dates = dateColumnPairs.map((e) => {
      return e[0];
    })
    columnValues = dateColumnPairs.map((e) => {
      return e[1];
    })
    var chartData = {
      labels: dates,
      datasets: [
      {
          //label: `${this.props.column} for ${this.props.stock.dataset.dataset_code}`,
          label: `foo`,
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
