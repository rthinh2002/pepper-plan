import React from 'react';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';
import { yearlyData, monthCategory } from '../../../../data/dummy';
import { color } from '../../../../theme/colorPallette';

const options = {
    chart: {
      type: 'column' // Use column type for a vertical bar chart
    },
    title: {
      text: 'Spending Breakdown by Month'
    },
    credits: {
        enabled: false
    },
    colors: color,
    xAxis: {
      categories: monthCategory
    },
    yAxis: {
      min: 0,
      title: {
        text: 'Total Expenses ($)'
      },
      stackLabels: {
        enabled: true,
        style: {
          fontWeight: 'bold',
          color: ( // theme
            Highcharts.defaultOptions.title.style &&
            Highcharts.defaultOptions.title.style.color
          ) || 'gray'
        }
      }
    },
    legend: {
        layout: 'horizontal', 
        align: 'center', 
        verticalAlign: 'bottom', 
        borderWidth: 1
    },
    tooltip: {
      headerFormat: '<b>{point.x}</b><br/>',
      pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}'
    },
    plotOptions: {
      column: {
        stacking: 'normal',
        dataLabels: {
          enabled: true
        }
      }
    },
    series: yearlyData
  };

const StackBarChart = () => {
  return (
    <HighchartsReact 
        highcharts={Highcharts}
        options={options}
    />
  )
}

export default StackBarChart