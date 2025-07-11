import React, { useState, useEffect } from 'react';
import { Box, Button, Typography, MobileStepper } from '@mui/material';

const images = [
  {
    label: 'San Francisco – Oakland Bay Bridge',
    imgPath: 'https://images.unsplash.com/photo-1635330211074-50308f363055?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bmFzaGlrfGVufDB8fDB8fHww',
  },
  {
    label: 'Bird',
    imgPath: 'https://images.unsplash.com/photo-1533894321612-48ae6413b4d6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bmFzaGlrfGVufDB8fDB8fHww',
  },
  {
    label: 'Bali, dadaIndonesia',
    imgPath: 'https://images.unsplash.com/photo-1665888002987-eb5a29ee775c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG5hc2hpa3xlbnwwfHwwfHx8MA%3D%3D',
  },
   {
    label: 'San Frdssdsancisco – Oakland Bay Bridge',
    imgPath: 'https://images.unsplash.com/photo-1694667509674-676629c9d069?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmFzaGlrfGVufDB8fDB8fHww',
  },
  {
    label: 'Bird2',
    imgPath: 'https://images.unsplash.com/photo-1665888013405-9d4bdb9b115c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG5hc2hpa3xlbnwwfHwwfHx8MA%3D%3D',
  },
  {
    label: 'Bali,2 Indonesia',
    imgPath: 'https://images.unsplash.com/photo-1665888122435-ecbdb6b56726?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG5hc2hpa3xlbnwwfHwwfHx8MA%3D%3D',
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
