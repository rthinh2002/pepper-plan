import React from 'react';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';
import { monthlyIncome } from '../../../../data/dummy';
import { color } from '../../../../theme/colorPallette';

const options = {
    title: {
        text: 'Account Balance For January',
        align: 'left'
    },
    credits: {
        enabled: false
    },
    colors: color,
    yAxis: {
        title: {
            text: 'Amount'
        }
    },
    xAxis: {
        accessibility: {
            rangeDescription: 'From Day 1 to Day 30'
        }
    },
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
    },
    plotOptions: {
        series: {
            label: {
                connectorAllowed: false
            },
            pointStart: 1
        }
    },
    series: monthlyIncome,
    responsive: {
        rules: [{
            condition: {
                maxWidth: 500,
            },
            chartOptions: {
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom'
                }
            }
        }]
    }
  };

const Balance = () => {
  return (
    <HighchartsReact 
        highcharts={Highcharts}
        options={options}
    />
  )
}

export default Balance