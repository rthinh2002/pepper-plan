import React from 'react';
import { Grid } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Logo from '../../Layout_Components/Logo/Logo';
import { centeringStyle } from '../../../theme/publicStyles';
import { motion } from 'framer-motion';
import LoginForm from './LoginForm';
import SignUpGreeting from './SignUpGreeting';

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 1120, 
    },
  },
  typography: {
    fontFamily: 'Montserrat',
    h1: {
        fontWeight: 'bold',
        fontSize: 40,
        marginBottom: 10,
    },
    h4: {
        fontSize: 20,
        marginBottom: 10,
    }
  }
});

const SignIn = () => {
  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main">
        {/* Logo */}
        <Grid item xs={12} sm={7} md={10} sx={{ height: '100%' }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.3,
              ease: [0, 0.71, 0.2, 1.01],
              scale: {
                type: "spring",
                damping: 7,
                stiffness: 100,
                restDelta: 0.001
              }
            }}
          >
            <Logo color={'color'}/>
          </motion.div>
          
          {/* Login elements */}
          <motion.div
            initial={{ opacity: 0,}}
            animate={{ opacity: 1, }}
            transition={{ duration: 2, ease: 'easeOut' }}
          >
            <LoginForm />
          </motion.div>
        </Grid>
        
        {/* Greeting elements */}
        <Grid item xs={false} sm={5} md={12} style={{overflow: 'hidden'}}>
          <motion.div
            initial={{ opacity: 0, x: '100vw' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ x: `${window.innerWidth}`, transition: { duration: 5 } }}
            transition={{ duration: 2.5, ease: 'easeOut' }}
            style={{
              ...centeringStyle, 
              height: '100vh', 
              backgroundColor: '#073138',
              borderRadius: '25% 0 0 25%',
            }}
          >
            <SignUpGreeting />
          </motion.div>
        </Grid>

      </Grid>
    </ThemeProvider>
  )
}

export default SignIn;