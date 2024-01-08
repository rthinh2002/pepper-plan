import React from 'react';
import { data } from '../../../data/dummy';

import { PieChart as Chart } from '@mui/x-charts/PieChart';

const PieChart = ({width, height}) => {
  return (
    <>
        <Chart 
            series={[
                {
                data: data,
                },
            ]}
            width={width}
            height={height}
        />
    </>
  )
}

export default PieChart