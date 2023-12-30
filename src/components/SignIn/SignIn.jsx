import React from 'react';
import { Grid, Typography, Box, Divider, Link, Button, TextField } from '@mui/material';
import Logo from '../Logo/Logo';
import { 
  backgroundStyle, 
  centerElementStyle, 
  MontserratBodyStyle, 
  MontserratHeaderStyle,
  socialIconContainer,
  socialIconStyle,
  textFieldFormStyle,
  textFieldfocusStyle,
  centeringStyle,
  buttonStyle,
  linkStyle
} from '../../theme/publicStyles';

const socialNetworkIconList = [
  { id: 'Facebook', url: 'https://upload.wikimedia.org/wikipedia/commons/b/b9/2023_Facebook_icon.svg' },
  { id: 'Google', url: 'https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg' },
  { id: 'LinkedIn', url: 'https://upload.wikimedia.org/wikipedia/commons/7/7e/LinkedIn_PNG16.png' },
];

const SignIn = () => {
  return (
    <Grid container component="main" sx={backgroundStyle}>
      <Grid item xs={12} sm={4} md={7} sx={{ backgroundColor: 'white', height: '100%' }}>
        <Logo />
        {/* Login elements */}
        <Box sx={centerElementStyle}>
          <Typography sx={MontserratHeaderStyle}>Login to Your Account</Typography>
          <Typography sx={MontserratBodyStyle}>Login using social network</Typography>
          {/* Social Logo wrapper */}
          <Box component='div' sx={socialIconContainer}>
            {socialNetworkIconList.map((icon) => (
              <img key={icon.id} src={icon.url} alt='Social Network Logo' style={socialIconStyle}/>
            ))}
          </Box>

          <Divider variant="middle" 
                    sx={{ ...MontserratBodyStyle,
                          width: 300,
                          '&::before, &::after': {
                            backgroundColor: 'black', 
                          },
                        }}
          >
            or
          </Divider>

          {/* Login Form */}
          <Box component="form" noValidate sx={{ mt: 1, justifyContent: 'center', alignItems: 'center' }} >
              <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  sx={textFieldfocusStyle}
                  InputProps={{
                    sx: textFieldFormStyle
                  }}
              />
              <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  sx={textFieldfocusStyle}
                  InputProps={{
                    sx: textFieldFormStyle
                  }}
              />
              <Box sx={centeringStyle}>
                <Link 
                  href="#" 
                  variant="body2" 
                  sx={linkStyle}
                >
                  Forgot your password? Click here
                </Link>
              </Box>
              <Box sx={centeringStyle}>
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ 
                      ...buttonStyle, 
                      width: 200, 
                    }}
                >
                    Sign In
                </Button>
              </Box>
          </Box>
        </Box>
      </Grid>

      <Grid item xs={false} sm={8} md={5} sx={{  }}></Grid>
    </Grid>

  )
}

export default SignIn;