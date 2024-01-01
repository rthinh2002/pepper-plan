import React from 'react';
import { Grid, Typography, Box, Divider, Link, Button, TextField } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Logo from '../../Layout_Components/Logo/Logo';
import { 
  centerElementStyle, 
  MontserratBodyStyle, 
  MontserratHeaderStyle,
  socialIconContainer,
  socialIconStyle,
  textFieldFormStyle,
  textFieldfocusStyle,
  centeringStyle,
  buttonStyle,
  linkStyle,
  whiteButtonStyle
} from '../../../theme/publicStyles';
import Lottie from 'lottie-react';
import { motion } from 'framer-motion';
import animationData from '../../../animations/circle_animation2.json';

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 1120, 
    },
  },
});

const socialNetworkIconList = [
  { id: 'Facebook', url: 'https://upload.wikimedia.org/wikipedia/commons/b/b9/2023_Facebook_icon.svg' },
  { id: 'Google', url: 'https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg' },
  { id: 'LinkedIn', url: 'https://upload.wikimedia.org/wikipedia/commons/7/7e/LinkedIn_PNG16.png' },
];

const SignIn = () => {
  return (
    <ThemeProvider theme={theme}>
    <Grid container component="main">
      <Grid item xs={12} sm={7} md={10} sx={{ height: '100%' }}>
        <Logo />
        {/* Login elements */}
        <motion.div
          initial={{ opacity: 0,}}
          animate={{ opacity: 1, }}
          transition={{ duration: 2, ease: 'easeOut' }}
        >
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
        </motion.div>
      </Grid>
      
      
      <Grid item xs={false} sm={5} md={12} style={{overflow: 'hidden'}}>
        <motion.div
          initial={{ opacity: 0, x: '100vw' }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 2.5, ease: 'easeOut' }}
          style={{
            ...centeringStyle, 
            height: '100vh', 
            backgroundColor: '#073138',
            borderRadius: '25% 0 0 25%',
          }}
        >
          <Box sx={{width: '40%'}}>
            <Box>
              <Typography sx={{...MontserratHeaderStyle, color: 'white'}}>New Here?</Typography>
              <Typography sx={{...MontserratBodyStyle, color: 'white', fontSize: 30, my: 2}}>Sign up to figure out how PepperPlan can help you manage your finance!</Typography>
            </Box>
            <Box sx={{...centeringStyle, zIndex: 2  }}>
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ 
                      ...whiteButtonStyle, 
                      width: 200, 
                    }}
                >
                    Sign Up
                </Button>
            </Box>
            <Box
              sx={{
                ...centeringStyle,
                zIndex: -1,
                position: 'absolute',
                top: '-50%',
                left: '-50%',
                width: '200%', 
                height: '200%', 
              }}
            >
              <Lottie style={{width: 800}} animationData={animationData}/>
            </Box>
            
          </Box>
        </motion.div>

      </Grid>
    </Grid>
  </ThemeProvider>
  )
}

export default SignIn;