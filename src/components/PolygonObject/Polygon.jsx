import React, { useEffect, useState } from 'react';
import { triangleStyle, circleStyle, squareStyle } from './Polygon.style';
import { Box } from '@mui/material';

const Polygon = ({type, top, right, rotate}) => {
    const [polygonStyle, setPolygonStyle] = useState({});
    useEffect(() => {
        let newPolygonStyle = {};
        switch (type) {
          case 'Triangle':
            newPolygonStyle = triangleStyle(top, right, rotate);
            break;
          case 'Square':
            newPolygonStyle = squareStyle(top, right, rotate);
            break;
          case 'Circle':
            newPolygonStyle = circleStyle(top, right, rotate);
            break;
          default:
            break;
        }
        setPolygonStyle(newPolygonStyle);
      }, [type, top, right, rotate]);


    return (
        <Box sx={polygonStyle}>

        </Box>
    )
}

export default Polygon