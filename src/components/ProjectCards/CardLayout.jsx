import React from 'react';
import { Card, Grid, Box, CardMedia } from '@material-ui/core';
import Masonry from 'react-masonry-component';

import ProjectCard from './ProjectCard';

const masonryOptions = {
  transitionDuration: 0,
};

const CardLayout = () => {
  return (
    <CardMedia>
      <h1>Projects</h1>

      <Box
        m={2}
        display="flex"
        flexDirection="row"
        flexWrap="nowrap"
        justifyContent="center"
      >
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </Box>
      <Box
        m={2}
        display="flex"
        flexDirection="row"
        flexWrap="nowrap"
        justifyContent="center"
      >
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </Box>
    </CardMedia>
  );
};

export default CardLayout;
