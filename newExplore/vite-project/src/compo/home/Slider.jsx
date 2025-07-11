import React, { useState, useEffect } from 'react';
import { Box, Button, Typography, MobileStepper } from '@mui/material';

const images = [
  {
    label: 'Salher Fort',
    imgPath:"src/assets/image/Slider-Mountaiin.jpg",
  },
  {
    label: 'Pandav Leni',
    imgPath: "src/assets/image/sllider-caves.jpg",
  },
   {
    label: 'Coin Museum (Shanti-Krishna Museum of Money and History)',
    imgPath: "src/assets/image/slider-coin.jpg",
  },
  {
    label: 'Back-Water',
    imgPath: "src/assets/image/slider-backwater.jpg",
  },
  {
    label: 'Sula WineYard',
    imgPath: "src/assets/image/slider-sula.jpg",
  },
];

const ImageSlider = () => {
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevStep) => (prevStep + 1) % maxSteps);
  };

  const handleBack = () => {
    setActiveStep((prevStep) => (prevStep - 1 + maxSteps) % maxSteps);
  };

  // Autoplay Effect
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000); // Change slide every 3 seconds

    // Cleanup interval on unmount
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <Box className="mt-2" sx={{ maxWidth: '100%' , mx: 'auto', position: 'relative' }}>
      <Box
        component="img"
        src={images[activeStep].imgPath}
        alt={images[activeStep].label}
        sx={{
          height: 400,
          width: '100%',
          objectFit: 'cover',
          borderRadius: 2,
        }}
      />
      <Typography
        variant="subtitle1"
        sx={{ mt: 1, textAlign: 'center' }}
      >
        {images[activeStep].label}
      </Typography>

      {/* Stepper and Buttons */}
       <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        
        // nextButton={

        //   <Button size="small" onClick={handleNext}>
        //     Next
        //     <KeyboardArrowRight />
        //   </Button>

        // }
        // backButton={
        //   <Button size="small" onClick={handleBack}>
        //     <KeyboardArrowLeft />
        //     Back
        //   </Button>
        // }
        sx={{
          justifyContent: 'center',
          mt: 2,
          backgroundColor: 'transparent',
        }} 
      /> 
    </Box>
  );
};

export default ImageSlider;
