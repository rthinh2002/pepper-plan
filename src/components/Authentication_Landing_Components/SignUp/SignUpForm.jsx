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
textFieldfocusStyle,
centeringStyle,
whiteButtonStyle,
linkStyle
} from '../../../theme/publicStyles';
import { socialNetworkIconList } from '../../../theme/socialIcon';

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

    const handleSignIn = (e) => {
      e.preventDefault();
      navigate('/signup');
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
                <Box component="form" onSubmit={handleSignIn} noValidate sx={{ mt: 1, justifyContent: 'center', alignItems: 'center' }} >
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
                            Sign In
                        </Button>
                    </Box>
                </Box>
            </Box>
        </ThemeProvider>
  )
}

export default SignUpForm