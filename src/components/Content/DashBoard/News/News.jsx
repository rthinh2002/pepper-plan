import React from 'react';
import { useState } from 'react';
import { newsData } from '../../../../data/dummy';
import { Box, Card, Typography, CardMedia, IconButton } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { styled } from '@mui/system';

const StyledCard = styled(Card)({
    height: '100%',
    width: '100%',
    boxShadow: 'none',
    position: 'relative',
    borderRadius: '30px',
});

const TypographyBoxWrapperStyled = styled(Box)({
    position: 'absolute', 
    bottom: 0,
    left: 0,
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    color: '#DFDFDF',
    padding: '15px',
})

const StyledIconButton = styled(IconButton)({
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    '&:hover': {
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
    },
})

const News = () => {
    const [news] = useState(newsData.articles);
    const [activeStep, setActiveStep] = useState(0);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    return (
        <Box position="relative" width="100%">
            <Box sx={{height: '100%', display: 'flex', justifyContent: 'center', alignContent: 'center', alignItems: 'center'}}>
                {news.length > 0 && (
                    <StyledCard>
                        <CardMedia
                            component="img"
                            height="100%"
                            image={news[activeStep].urlToImage}
                            alt={news[activeStep].title}
                        />
                        <TypographyBoxWrapperStyled>
                            <Typography variant="h6" sx={{fontFamily: 'Montserrat'}}>{news[activeStep].title}</Typography>
                        </TypographyBoxWrapperStyled>
                    </StyledCard>
                )}
            </Box>
            <StyledIconButton
                onClick={handleBack}
                disabled={activeStep === 0}
                sx={{
                    left: 10,
                }}
            >
                <ArrowBackIosIcon sx={{ color: 'white' }} />
            </StyledIconButton>
            <StyledIconButton
                onClick={handleNext}
                disabled={activeStep === news.length - 1}
                sx={{
                    right: 10,
                }}
            >
                <ArrowForwardIosIcon sx={{ color: 'white' }} />
            </StyledIconButton>
        </Box>
    );
}

export default News