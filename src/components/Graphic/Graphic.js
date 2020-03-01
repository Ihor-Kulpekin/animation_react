import React, {useEffect} from 'react';
import {chart} from "highcharts";

const options = {
  chart: {
    renderTo: 'chart',
  },
  title: {
    text: 'GRAPHIC VALUES'
  },
  tooltip: {
    shared: true
  },
  yAxis: {
    title: {
      text: 'Value',
      fontSize: 14,
      gridLineWidth: 1
    },
    labels: {
      function() {
        return this.value;
      }
    }
  },
  xAxis: {
    categories: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  },
  series: [
    {
      name: 'Values',
      type: 'column',
      data: [5, 10, 7, 11, 5, 13, 10, 5, 11, 5, 12, 8],
      tooltip: {
        valueSuffix: ' column'
      },
      colorValue:'#3f51b5'
    },
    {
      name: 'Line',
      type: 'spline',
      data: [5, 10, 7, 11, 5, 13, 10, 5, 11, 5, 12, 8],
      tooltip:{
        valueSuffix:' line'
      }
    }
  ]
};

const Graphic = () => {

  const highChartsRender = () => {
    chart(options);
  };

  useEffect(highChartsRender);

  return (
    <div id='chart'/>
  )
};

export default Graphic;