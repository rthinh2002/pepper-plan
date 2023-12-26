import React from 'react';
import { Grid, Typography, Box } from '@mui/material';
import logo from '../../images/pepper_plan.png';

const socialNetworkIconList = [
  { id: 'Facebook', url: 'https://upload.wikimedia.org/wikipedia/commons/b/b9/2023_Facebook_icon.svg' },
  { id: 'Google', url: 'https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg' },
  { id: 'LinkedIn', url: 'https://upload.wikimedia.org/wikipedia/commons/7/7e/LinkedIn_PNG16.png' },
];

const SignIn = () => {
  return (
    <Grid container component="main" sx={{ height: "100vh", backgroundColor: "#073138" }}>
      <Grid item xs={12} sm={4} md={7} sx={{ backgroundColor: 'white', height: '100%' }}>
        {/* Logo */}
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

        {/* Login elements */}
        <Box sx={{my: 12, mx: 4, display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
          <Typography sx={{fontFamily: 'Montserrat', fontSize: 40, fontWeight: 'bold'}}>Login to Your Account</Typography>
          <Typography sx={{fontFamily: 'Montserrat', fontSize: 20}}>Login using social network</Typography>
          {/* Social Logo wrapper */}
          <Box component='div' sx={{my: 2, display: 'flex', gap: 8}}>
            {socialNetworkIconList.map((icon) => (
              <img key={icon.id} src={icon.url} alt='Social Network Logo' style={{width: 40, height: 40}}/>
            ))}
          </Box>
        </Box>
      </Grid>

      <Grid item xs={false} sm={8} md={5} sx={{  }}></Grid>
    </Grid>

  )
}

export default SignIn;