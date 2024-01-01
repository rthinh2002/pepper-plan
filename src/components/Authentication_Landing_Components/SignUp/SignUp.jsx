import React from 'react';
import { Container, Grid } from '@mui/material';
import { backgroundStyle } from '../../../theme/publicStyles';
import { motion } from 'framer-motion';

const SignUp = () => {
  return (
    <div style={{ backgroundColor: 'black', height: '100vh' }}>
      <Grid container component="main">
        <Grid
            item
            xs={false}
            sm={4}
            md={7}
            sx={{ height: '100vh', backgroundColor: 'black' }}
          >
            <Container>test1</Container>
          </Grid>


        <Grid
          item
          xs={12}
          sm={8}
          md={5}
        >
          <motion.div
            initial={{ x: '100vw' }}
            animate={{ x: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            style={{ width: '100%', backgroundColor: 'yellow',
            height: '100vh',
            display: 'flex',
            justifyContent: 'flex-end', // Align content to the right
            alignItems: 'center', // Vertically center content
            padding: '0 16px', }}
          >
            <Container>
              Test2
            </Container>
          </motion.div>
        </Grid>

        
      </Grid>
    </div>
    
  )
}

export default SignUp