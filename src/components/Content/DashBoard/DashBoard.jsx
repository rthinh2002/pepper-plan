import React from 'react';
import { Grid, Box } from '@mui/material';
import {
  dashboardThreeColumnStyle,
  dashboardTwoColumnStyle,
} from './DashBoardComponentStyle';

import PieChart from './VisualDisplay/PieChart';
import StackBarChart from './VisualDisplay/StackBarChart';

const DashBoard = () => {
  return (
    <>
      <Grid container spacing={2} sx={{p: 4}}>
        <Grid item xs={7}>
          <Box sx={{...dashboardTwoColumnStyle, display: 'flex'}}>
            <div style={{marginTop: 30, width: 500}}>
                <PieChart width={520} height={300}/>
            </div>
            <div style={{marginTop: 30, width: 500}}>
                <StackBarChart />
            </div>
          </Box>
        </Grid>

        <Grid item xs={5}>
          <Box sx={dashboardTwoColumnStyle} />
        </Grid>
      </Grid>

      <Grid container spacing={2} sx={{p: 4, mt: -8}}>
        <Grid item xs={4}>
          <Box sx={dashboardThreeColumnStyle} />
        </Grid>

        <Grid item xs={4}>
          <Box sx={dashboardThreeColumnStyle} />
        </Grid>

        <Grid item xs={4}>
          <Box sx={dashboardThreeColumnStyle} />
        </Grid>
      </Grid>
    </>
    
  )
}

export default DashBoard