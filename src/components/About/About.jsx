import React from 'react';
import { Typography, Box, Button } from '@material-ui/core';
import GetAppIcon from '@material-ui/icons/GetApp';
import { styled } from '@material-ui/core/styles';

const ChubbyButton = styled(Button)({
  borderRadius: '5em',
  backgroundColor: 'rgb(255, 255, 255, 0.1)',
  fontSize: '15px',
  fontWeight: 'bold',
  textTransform: 'none',
  color: 'white',
  margin: '1em',
  padding: '0.4em',
  paddingLeft: '2em',
  paddingRight: '2em',

  backdropFilter: 'blur(3px)',

  '&:hover': {
    backgroundColor: 'rgb(255, 255, 255, 0.05)',
  },
});

const AboutCard = styled(Box)({
  backdropFilter: 'blur(4px)',
  backgroundColor: 'rgb(255, 255, 255, 0.1)',
  width: '60vw',
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  margin: 'auto',
  padding: '2em',
  borderRadius: '1em',
});

const Resume = () => {
  return (
    <AboutCard
      display='flex'
      flexDirection='column'
      justifyContent='center'
      alignItems='center'
      height='60%'
    >
      <section id='about'>
        <div className='row'>
          <div className='nine columns main-col'>
            <Typography variant='h5' style={{ color: 'white' }}>
              About Me
            </Typography>
            <Typography style={{ color: 'white' }}>
              I'm currently attending the Georgia Institute of Technology
              pursuing a B.S. of Computer Science. I intend to graduate in May
              2024.
              <br />
              <br />
              I'm hoping to find an internship for Summer 2021.
              <br />
              <br />
            </Typography>
            <div className='row'>
              <div className='columns contact-details'>
                <Typography variant='h5' style={{ color: 'white' }}>
                  Contact Info
                </Typography>
                <Typography style={{ color: 'white' }}>
                  Edmund Xin
                  <br />
                  (913)-617-0133
                  <br />
                  mxin@gatech.edu
                </Typography>
              </div>
            </div>
          </div>
        </div>
        <ChubbyButton
          href='https://raw.githubusercontent.com/mxinburritos/resume/master/resume.pdf'
          target='_blank'
        >
          <GetAppIcon />
          Download Resume
        </ChubbyButton>
      </section>
    </AboutCard>
  );
};

export default Resume;
