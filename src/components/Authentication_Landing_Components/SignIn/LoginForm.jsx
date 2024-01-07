import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Typography, Divider, Link, Button, TextField } from '@mui/material';
import { 
centerElementStyle, 
MontserratBodyStyle, 
socialIconContainer, 
socialIconStyle, 
textFieldFormStyle, 
textFieldfocusStyle, 
centeringStyle, 
buttonStyle, 
linkStyle 
} from '../../../theme/publicStyles';
import { socialNetworkIconList } from '../../../theme/socialIcon';
import AuthService from '../../../services/authService';

const LoginForm = () => {
    const navigate = useNavigate();
    const authService = new AuthService();

    const handleSignIn = (e) => {
      e.preventDefault();
      const data = new FormData(e.currentTarget);
      try {
        authService.login(data.get('email'), data.get('password'));
        navigate('/dashboard');
      } catch (error) {
        console.log(error);
      }
    }

  return (
    <Box sx={centerElementStyle}>
        <Typography variant='h1'>Login to Your Account</Typography>
        <Typography variant='h4'>Login using social network</Typography>
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
  )
}

export default LoginForm;
