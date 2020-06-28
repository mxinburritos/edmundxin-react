import React from 'react';
import { Grid, Typography, Box, Button } from '@material-ui/core';
import GetAppIcon from '@material-ui/icons/GetApp';
import styled from 'styled-components';
import Avatar from 'react-avatar';

const WhiteTitle = styled(Typography)`
  color: white;
  font-weight: bold;
`;

const WhiteBody = styled(Typography)`
  color: white;
`;

const ChubbyButton = styled(Button)`
  border-radius: 5em;
  background-color: rgb(255, 255, 255, 0.1);
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
    background-color: rgb(255, 255, 255, 0.05);
  }
`;

const Resume = () => {
  return (
    <Box
      display='flex'
      flexDirection='column'
      justifyContent='center'
      alignItems='center'
      height='40%'
    >
      <Grid container spacing={5} justify='center' alignItems='center'>
        <Grid item xs={4}>
          <Box display='flex' justifyContent='flex-end'>
            <Avatar
              size='100'
              facebook-id='Edmund Xin'
              src='https://media-exp1.licdn.com/dms/image/C5603AQFgAI3p-3o0RQ/profile-displayphoto-shrink_400_400/0?e=1598486400&v=beta&t=odW4KVtdpEIIXo0-ZeMr6TWlpBliIRfQL3432saASL0'
              round={true}
            />
          </Box>
        </Grid>
        <Grid item xs={8}>
          <WhiteTitle variant='h5' color='white'>
            About Me
          </WhiteTitle>
          <WhiteBody variant='subtitle1'>
            I'm currently attending the Georgia Institute of Technology pursuing
            a B.S. of Computer Science. I intend to graduate in May 2024.
            <br />
            <br />I like dogs, programming, and drinking water.
          </WhiteBody>
          <br />
        </Grid>
      </Grid>
      <Grid container spacing={5}>
        <Grid item xs={4}></Grid>
        <Grid item xs={8}>
          <Grid container>
            <Grid item>
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
            </Grid>
            <Grid item>
              <ChubbyButton
                href='https://raw.githubusercontent.com/mxinburritos/resume/master/resume.pdf'
                target='_blank'
              >
                <GetAppIcon />
                Download Resume
              </ChubbyButton>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Resume;
