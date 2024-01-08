import React from 'react';
import { Grid, Box } from '@mui/material';
import {
  dashboardThreeColumnStyle,
  dashboardTwoColumnStyle,
} from './DashBoardComponentStyle';

const DashBoard = () => {
  return (
    <>
      <Grid container spacing={2} sx={{p: 4}}>
        <Grid item xs={7}>
          <Box sx={dashboardTwoColumnStyle} />
        </Grid>

        <Grid item xs={5}>
          <Box sx={dashboardTwoColumnStyle} />
        </Grid>
      </Grid>

      <Grid container spacing={2} sx={{p: 4, mt: -4}}>
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