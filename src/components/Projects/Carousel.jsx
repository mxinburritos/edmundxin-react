import React, { useState } from 'react';
import {
  Card,
  Grid,
  Button,
  CardContent,
  Typography,
  Box,
} from '@material-ui/core';
import styled from 'styled-components';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';

const ArrowButton = styled(Button)`
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  padding: 0;
  height: 65px;
  width: 50px;

  backdrop-filter: blur(3px);

  .white {
    color: rgb(255, 255, 255, 1);
    transition: 0.3s cubic-bezier(0.47, 1.64, 0.41, 0.8);
    transform: scale(1.3);
  }

  &:hover {
    background-color: rgba(255, 255, 255, 0.05);
    .white {
      transform: scale(1.7);
    }
  }
`;

const BlurredCard = styled(Card)`
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.1);
  height: 40em;
  width: 70em;

  backdrop-filter: blur(3px);
`;

const projectInfo = [{}];

const Carousel = () => {
  const [content, setContent] = useState([]);

  return (
    <Box
      display='flex'
      flexDirection='column'
      justifyContent='center'
      alignItems='center'
      height='80%'
    >
      <Grid container spacing={3} justify='center' alignItems='center'>
        <Grid item>
          <ArrowButton>
            <KeyboardArrowLeft className='white' />
          </ArrowButton>
        </Grid>
        <Grid item>
          <BlurredCard>
            <CardContent></CardContent>
          </BlurredCard>
        </Grid>
        <Grid item>
          <ArrowButton>
            <KeyboardArrowRight className='white' />
          </ArrowButton>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Carousel;
