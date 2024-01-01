import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import animationData from '../../../animations/circle_animation2.json';
import Lottie from 'lottie-react';
import {
    centeringStyle,
    whiteButtonStyle,
} from '../../../theme/publicStyles';

const SignUpGreeting = () => {
  return (
    <Box sx={{width: '40%'}}>
        <Box>
            <Typography variant='h1' sx={{color: 'white'}}>New Here?</Typography>
            <Typography variant='h4' sx={{color: 'white', fontSize: 30, my: 2}}>Sign up to figure out how PepperPlan can help you manage your finance!</Typography>
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
  )
}

export default SignUpGreeting