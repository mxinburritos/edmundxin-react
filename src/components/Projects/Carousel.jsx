import 'pure-react-carousel/dist/react-carousel.es.css';
import React from 'react';
import {
  Button,
  Typography,
} from '@material-ui/core';
import { styled } from '@material-ui/core/styles';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import {
  Image,
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from 'pure-react-carousel';

import './Carousel.css';
import gcaimage from '../../assets/img/group-chat-analyzer-image.png';
import wimage from '../../assets/img/weatherboy-image.png';
import dtsimage from '../../assets/img/dts-image.png';

const CardSlide = styled(Slide)({
  backdropFilter: 'blur(3px)',
  borderRadius: '1em',
  backgroundColor: 'rgba(255, 255, 255, 0.1)',
});

const ArrowButtonNext = styled(ButtonNext)({
  border: 'none',
  outline: 'none',
  backgroundColor: 'rgba(255, 255, 255, 0.1)',
  borderRadius: '50%',
  padding: 0,
  margin: '1em',
  height: '50px',
  width: '50px',

  backdropFilter: 'blur(4px)',

  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
  },
});

const ArrowButtonBack = styled(ButtonBack)({
  border: 'none',
  outline: 'none',
  backgroundColor: 'rgba(255, 255, 255, 0.1)',
  borderRadius: '50%',
  padding: 0,
  margin: '1em',
  height: '50px',
  width: '50px',

  backdropFilter: 'blur(4px)',

  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
  },
});

// const BlurredCard = styled(Card)({
//   borderRadius: '10px',
//   backgroundColor: 'rgba(255, 255, 255, 0.1)',
//   height: '40em',
//   width: '70em',

//   backdropFilter: 'blur(3px)',
// });

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

const Carousel = () => {
  // const [content, setContent] = useState([]);

  return (
    <CarouselProvider
      visibleSlides={1}
      totalSlides={3}
      naturalSlideWidth={400}
      naturalSlideHeight={300}
      className='carousel-center'
    >
      <div className='carousel-container'>
        <Slider>
          <CardSlide index={0}>
            <Image
              src={gcaimage}
              isBgImage={true}
              className='image-container'
              tag='div'
            >
              <div className='bottom-title'>
                <Typography variant='h3' style={{ color: 'white' }}>
                  Group Chat Analyzer
                </Typography>
                <Typography style={{ color: 'white' }}>
                  <span aria-label="phone" role="img">📱</span> Application that takes JSON data from Facebook Messenger and
                  analyses contents. It will display metrics like the number of
                  swear words spoken for each person and charts to represent it.
                </Typography>
                <div>
                  <ChubbyButton
                    href='https://mxinburritos.github.io/group-chat-analyzer/'
                    target='_blank'
                  >
                    Live Demo
                  </ChubbyButton>
                  <ChubbyButton
                    href='https://github.com/mxinburritos/group-chat-analyzer'
                    target='_blank'
                  >
                    Github Repo
                  </ChubbyButton>
                </div>
              </div>
            </Image>
          </CardSlide>
          <CardSlide index={1}>
            <Image
              src={wimage}
              isBgImage={true}
              className='image-container'
              tag='div'
            >
              <div className='bottom-title'>
                <Typography variant='h3' style={{ color: 'white' }}>
                  Weatherboy
                </Typography>
                <Typography style={{ color: 'white' }}>
                  <span role="img" aria-label="cloud">⛅</span>️ A simple weather application that gives allows you to
                  search for cities around the world. It displays the current
                  temperature and the week's forecast. The background image will
                  change to reflect the city you searched.
                </Typography>
                <div>
                  <ChubbyButton
                    href='https://mxinburritos.github.io/weatherboy/'
                    target='_blank'
                  >
                    Live Demo
                  </ChubbyButton>
                  <ChubbyButton
                    href='https://github.com/mxinburritos/weatherboy'
                    target='_blank'
                  >
                    Github Repo
                  </ChubbyButton>
                </div>
              </div>
            </Image>
          </CardSlide>
          <CardSlide index={2}>
            <Image
              src={dtsimage}
              isBgImage={true}
              className='image-container'
              tag='div'
            >
              <div className='bottom-title'>
                <Typography variant='h3' style={{ color: 'white' }}>
                  Disaster Tweet Classification
                </Typography>
                <Typography style={{ color: 'white' }}>
                  <span role="img" aria-label="asteroid">☄</span>️ Processes contents of a tweet and classifies it as
                  referring to a disaster or not using a Naive Bayes Classifier.
                </Typography>
                <div>
                  <ChubbyButton
                    href='https://github.com/mxinburritos/disaster-tweet-sorting/'
                    target='_blank'
                  >
                    Github Repo
                  </ChubbyButton>
                </div>
              </div>
            </Image>
          </CardSlide>
        </Slider>
        <ArrowButtonBack className='button-back'>
          <KeyboardArrowLeft className='white' />
        </ArrowButtonBack>
        <ArrowButtonNext className='button-next'>
          <KeyboardArrowRight className='white' />
        </ArrowButtonNext>
      </div>
    </CarouselProvider>
  );
};

export default Carousel;
