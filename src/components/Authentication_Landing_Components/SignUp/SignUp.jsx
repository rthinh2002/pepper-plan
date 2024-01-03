import React from 'react';
import { Box } from '@mui/material';
import { bodyStyle, backgroundStyle } from '../../../theme/publicStyles';
import SignUpForm from './SignUpForm';
import Logo from '../../Layout_Components/Logo/Logo';

import { motion } from 'framer-motion';

const SignUp = () => {
  return (
    <Box sx={{...backgroundStyle, overflow: 'hidden'}}>
      <Box>
        <Logo color={'white'}/>
      </Box>

      
      <Box sx={{...bodyStyle, my: -15}}>
      <motion.div
        initial={{ opacity: 0, x: `${window.innerWidth}` }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <SignUpForm />
        </motion.div>
      </Box>
    </Box>
  )
}

export default SignUp