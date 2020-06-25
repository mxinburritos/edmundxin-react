import React from 'react';
import styled from 'styled-components';
import { Box, Typography, Button, Grid } from '@material-ui/core';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Resume from '../../assets/docs/resume.pdf';

library.add(fab);

const Title = styled(Typography)`
  color: white;
  font-size: 60px;
  font-weight: bold;
  margin-bottom: -0.1em;
`;

const Subtitle = styled(Typography)`
  color: white;
  font-size: 15px;
`;

const ChubbyButton = styled(Button)`
  border-radius: 5em;
  background-color: rgb(255, 255, 255, 0.2);
  font-size: 15px;
  font-weight bold;
  text-transform: none;
  color: white;
  margin: 1em;
  padding: 0.4em;
  padding-left: 2em;
  padding-right: 2em;

  backdrop-filter: blur(3px);

  &:hover {
    background-color:(50,250,50,1);
  }
`;

const Home = () => {
  return (
    <Box
      display='flex'
      flexDirection='column'
      justifyContent='center'
      alignItems='center'
      height='100%'
    >
      <Title>I'm Edmund Xin.</Title>
      <Subtitle>
        {'Front End Developer \u2758 Competitive Programmer \u2758 Student'}
      </Subtitle>
      <Grid justify='center' container spacing={3}>
        <Grid item>
          <ChubbyButton href='https://github.com/mxinburritos' target='_blank'>
            Portfolio
          </ChubbyButton>
        </Grid>
        <Grid item>
          <ChubbyButton href={Resume} target='_blank'>
            Resume
          </ChubbyButton>
        </Grid>
      </Grid>
      <Grid justify='center' container spacing={3}>
        <Grid item>
          <a href='https://www.github.com/mxinburritos' target='_blank'>
            <FontAwesomeIcon icon={['fab', 'github']} size='2x' color='white' />
          </a>
        </Grid>
        <Grid item>
          <a
            href='https://www.linkedin.com/in/edmund-xin-771937176/'
            target='_blank'
          >
            <FontAwesomeIcon
              icon={['fab', 'linkedin']}
              size='2x'
              color='white'
            />
          </a>
        </Grid>
        <Grid item>
          <a href='https://www.instagram.com/edmund.xin/' target='_blank'>
            <FontAwesomeIcon
              icon={['fab', 'instagram']}
              size='2x'
              color='white'
            />
          </a>
        </Grid>
        <Grid item>
          <a href='https://twitter.com/mxinburritos' target='_blank'>
            <FontAwesomeIcon
              icon={['fab', 'twitter']}
              size='2x'
              color='white'
            />
          </a>
        </Grid>
        <Grid item>
          <a href='https://www.facebook.com/mxinburritos/' target='_blank'>
            <FontAwesomeIcon
              icon={['fab', 'facebook']}
              size='2x'
              color='white'
            />
          </a>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
