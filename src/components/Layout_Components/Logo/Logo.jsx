import React from 'react';
import { Grid, Typography, Box } from '@mui/material';
import logo from '../../../images/pepper_plan.png';

const Logo = () => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexGrow: 1 }}>
        <Grid item xs={4}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <img style={{ width: "20%" }} src={logo} alt="Brand Logo" />
                <Typography variant="h6" component="div" sx={{ ml: 0, fontFamily: 'Nanum Gothic Coding' }}>
                PepperPlan
                </Typography>
            </Box>
        </Grid>
    </Box>
  )
}

export default Logo;