import React from 'react';
import { Grid, Typography, Box, Button } from '@material-ui/core';
import GetAppIcon from '@material-ui/icons/GetApp';
import { styled } from '@material-ui/core/styles';
import Avatar from 'react-avatar';

const WhiteTitle = styled(Typography)({
  color: 'white',
  fontWeight: 'bold',
});

const WhiteBody = styled(Typography)({
  color: 'white',
});

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

const Resume = () => {
  return (
    <Box
      display='flex'
      flexDirection='column'
      justifyContent='center'
      alignItems='center'
      height='60%'
    >
      <section id='about'>
        <div className='row'>
          <div className='three columns'>
            <Avatar
              size='100'
              facebook-id='Edmund Xin'
              src='https://media-exp1.licdn.com/dms/image/C5603AQFgAI3p-3o0RQ/profile-displayphoto-shrink_400_400/0?e=1598486400&v=beta&t=odW4KVtdpEIIXo0-ZeMr6TWlpBliIRfQL3432saASL0'
              round={true}
            />
          </div>
          <div className='nine columns main-col'>
            <WhiteTitle variant='h5' color='white'>
              About Me
            </WhiteTitle>
            <WhiteBody variant='subtitle1'>
              I'm currently attending the Georgia Institute of Technology
              pursuing a B.S. of Computer Science. I intend to graduate in May
              2024.
              <br />
              <br />I like dogs, programming, and drinking water.
            </WhiteBody>
            <div className='row'>
              <div className='columns contact-details'>
                <WhiteTitle variant='h5'>Contact Info</WhiteTitle>
                <WhiteBody variant='subtitle1'>
                  Edmund Xin
                  <br />
                  4818 Alexandria Ln
                  <br />
                  San Jose, CA 95129 US
                  <br />
                  (913)-617-0133
                  <br />
                  markxin2002@gmail.com
                </WhiteBody>
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
    </Box>
  );
};

export default Resume;
