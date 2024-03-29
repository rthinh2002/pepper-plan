import React from 'react';
import { useNavigate } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Box, Typography, Divider, Link, Button, TextField } from '@mui/material';
import {
centerElementStyle,
MontserratBodyStyle,
socialIconContainer,
socialIconStyle,
textFieldFormStyle,
centeringStyle,
whiteButtonStyle,
linkStyle,
textFieldfocusStyleForGreenBackground
} from '../../../theme/publicStyles';
import { socialNetworkIconList } from '../../../theme/socialIcon';
import AuthService from '../../../services/authService';

const theme = createTheme({
    typography: {
        fontFamily: 'Montserrat',
        h1: {
            fontWeight: 'bold',
            fontSize: 40,
            color: 'white',
            marginBottom: 10,
        },
        h4: {
            fontSize: 20,
            color: 'white',
            marginBottom: 10,
        }
    }
});

const SignUpForm = () => {
    const navigate = useNavigate();
    const authService = new AuthService();

    const handleSignUp = (e) => {
      e.preventDefault();
      const data = new FormData(e.currentTarget);
      try {
        authService.signUp(data.get('email'), data.get('password'));
        authService.logout();
        navigate('/');
      } catch (error) {
        alert(error);
      }
    }

    return (
        <ThemeProvider theme={theme}>
            <Box sx={centerElementStyle}>
                <Typography variant='h1'>Sign Up</Typography>
                <Typography variant='h4'>Sign up using social network</Typography>
                {/* Social Logo wrapper */}
                <Box component='div' sx={socialIconContainer}>
                    {socialNetworkIconList.map((icon) => (
                    <img key={icon.id} src={icon.url} alt='Social Network Logo' style={socialIconStyle}/>
                    ))}
                </Box>

                <Divider variant="middle" 
                            sx={{ ...MontserratBodyStyle,
                                width: 300,
                                color: 'white',
                                '&::before, &::after': {
                                    backgroundColor: 'white', 
                                },
                                }}
                >
                    or
                </Divider>

                {/* Login Form */}
                <Box component="form" onSubmit={handleSignUp} noValidate sx={{ mt: 1, justifyContent: 'center', alignItems: 'center' }} >
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        placeholder="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        sx={textFieldfocusStyleForGreenBackground}
                        InputProps={{
                            sx: textFieldFormStyle
                        }}
                        InputLabelProps={{
                            shrink: false,
                        }}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        placeholder="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        sx={textFieldfocusStyleForGreenBackground}
                        InputProps={{
                            sx: textFieldFormStyle
                        }}
                        InputLabelProps={{
                            shrink: false,
                        }}
                    />
                    <Box sx={centeringStyle}>
                        <Link 
                        href="#" 
                        variant="body2" 
                        sx={{...linkStyle, color: 'white'}}
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
                            ...whiteButtonStyle, 
                            width: 200, 
                            }}
                        >
                            Sign Up
                        </Button>
                    </Box>
                </Box>
            </Box>
        </ThemeProvider>
  )
}

export default SignUpForm