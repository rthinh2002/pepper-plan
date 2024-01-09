import React from 'react';
import { data } from '../../../../data/dummy';
import { color } from '../../../../theme/colorPallette';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';
import Highcharts3D from 'highcharts/highcharts-3d';

if(typeof Highcharts === 'object') {
  Highcharts3D(Highcharts);
}

const PieChart = ({width, height}) => {
  return (
    <>
        <HighchartsReact 
          highcharts={Highcharts} 
          options={{
            chart: {
              type: 'pie',
              options3d: {
                enabled: true,
                alpha: 45,
              },
            },
            plotOptions: {
              pie: {
                depth: 45,
                shadow: true,
                size: '90%'
              },
            },
            colors: color,
            title: {
              text: 'Your Spending This Month Breakdown',
            },
            credits: {
              enabled: false
            },
            tooltip: {
              formatter: function() {
                return '<b>' + this.point.name + '</b>: $' + this.y;
              }
            },
            series: [{
              name: 'Expense',
              type: 'pie',
              data: data, 
            }],
          }}

        />
    </>
  )
}

export default PieChart