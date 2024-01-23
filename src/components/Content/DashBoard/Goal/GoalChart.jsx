import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const GoalChart = () => {
    const options = {
        chart: {
          type: 'pie',
        },
        title: {
            align: 'center',
            text: 'Saving Goal'
        },
        subtitle: {
            useHTML: true,
            text: '33,3% till goal',
            style: {
                fontSize: '30px',
            },
            floating: true,
            verticalAlign: 'middle',
            y: 50,
            x: 5
        },
        colors: ['#004B4B', '#CFD2CD'],
        tooltip: {
          pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
          pie: {
            innerSize: '80%',
            dataLabels: {
              enabled: true,
              format: '<b>{point.name}</b>: {point.percentage:.1f} %'
            }
          }
        },
        series: [{
          name: 'Goal',
          colorByPoint: true,
          data: [
             {name: 'Saving', y: 10000}
            ,{name: 'Till Goal',y: 15000 - 10000}
        ]
        }]
      };

    return (
        <HighchartsReact
            highcharts={Highcharts}
            options={options}
        />
    )
}

export default GoalChart