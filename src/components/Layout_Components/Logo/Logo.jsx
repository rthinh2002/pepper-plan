import React from 'react';
import { Grid, Typography, Box } from '@mui/material';
import logoColor from '../../../images/pepper_plan.png';
import logoWhite from '../../../images/pepper_plan_white.png';

const Logo = ({color}) => {
  const logo = color === 'color' ? logoColor : logoWhite;
  const TypographyStyle = color === 'color' ? 
  {
    ml: 0,
    fontFamily: 'Nanum Gothic Coding',
    color: 'black',
  } : {
    ml: 0,
    fontFamily: 'Nanum Gothic Coding',
    color: 'white',
  }

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexGrow: 1 }}>
      <Grid item xs={4}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <img style={{ width: "20%" }} src={logo} alt="Brand Logo" />
              <Typography variant="h6" component="div" sx={TypographyStyle}>
              PepperPlan
              </Typography>
          </Box>
      </Grid>
    </Box>
  )
}

export default Logo;