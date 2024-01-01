import React from 'react';
import { Box } from '@mui/material';
import { bodyStyle, backgroundStyle } from '../../../theme/publicStyles';
import SignUpForm from './SignUpForm';
import Logo from '../../Layout_Components/Logo/Logo';

const SignUp = () => {
  return (
    <Box sx={{...backgroundStyle, overflow: 'hidden'}}>
      <Box>
        <Logo color={'white'}/>
      </Box>

      <Box sx={{...bodyStyle, my: -15}}>
        <SignUpForm />
      </Box>
    </Box>
    
  )
}

export default SignUp