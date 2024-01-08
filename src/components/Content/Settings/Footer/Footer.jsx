import React from 'react';
import { Box, Container, Typography, Link, Grid } from '@mui/material';
import Logo from '../../../Layout_Components/Logo/Logo';

const Footer = () => {
    return (
    <Box component="footer" sx={{ bgcolor: '#073138', py: 3 }}>
        <Container maxWidth="lg">
        <Grid container justifyContent="space-between" alignItems="center">
            <Grid item>
                <Box>
                    <Logo color={'white'}/> 
                </Box>
            </Grid>
            <Grid item>
            <Link sx={{color: 'white'}}>
                Features
            </Link>
            {' | '}
            <Link sx={{color: 'white'}}>
                Enterprise
            </Link>
            {' | '}
            <Link sx={{color: 'white'}}>
                Support
            </Link>
            {' | '}
            <Link sx={{color: 'white'}}>
                ICO
            </Link>
            </Grid>
            <Grid item>
            <Typography variant="body2" color="white" align="center">
                © 2024 PepperPlan. All rights reserved.
            </Typography>
            </Grid>
        </Grid>
        </Container>
    </Box>
    );
  };
  
  export default Footer;