import React from 'react';
import { Container, Grid } from '@mui/material';
import Polygon from '../PolygonObject/Polygon';

const SignIn = () => {
  return (
    <Container maxWidth="xl" sx={{ display: 'flex', justifyContent: 'flex-end', backgroundColor: "#073138", height: '100vh' }}>
        <Polygon type="Triangle" top="15%" right="25%" rotate="30deg"/>
        <Polygon type="Circle" top="75%" right="45%" rotate="30deg"/>
    </Container>
  )
}

export default SignIn;