import React from 'react';
import { Grid, Box, Card } from '@mui/material';
import {
  dashboardThreeColumnStyle,
  dashboardTwoColumnStyle,
} from './DashBoardComponentStyle';

import PieChart from './PieChart';

const DashBoard = () => {
  return (
    <>
      <Grid container spacing={2} sx={{p: 4}}>
        <Grid item xs={7}>
          <Box sx={dashboardTwoColumnStyle}>
              <PieChart width={520} height={300}/>
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