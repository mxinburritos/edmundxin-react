import React from 'react';
import { red, blue, green } from '@material-ui/core/colors';
import Slider from 'react-animated-slider';

import Carousel from './Carousel';

const slides = [
  { title: 'First item', description: 'Lorem ipsum' },
  { title: 'Second item', description: 'Lorem ipsum' },
];

const Projects = () => {
  return <Carousel />;
};

export default Projects;
