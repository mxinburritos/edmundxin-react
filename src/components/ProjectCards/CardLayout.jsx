import React from 'react';
import { Card, Grid, Box, CardMedia, Typography } from '@material-ui/core';
import Masonry from 'react-masonry-component';

import ProjectCard from './ProjectCard';

const CardLayout = () => {
  return (
    <div>
      <Box display="flex" justifyContent="center">
        <Typography variant="h5">Projects</Typography>
      </Box>
      <Box
        m={2}
        display="flex"
        flexDirection="row"
        flexWrap="nowrap"
        justifyContent="center"
      >
        <ProjectCard
          project={{
            title: 'Monkeys',
            description: 'Analyzing messenger group chats',
            image: '../../img/monkeys.png',
          }}
        />
        <ProjectCard
          project={{
            title: 'Cavestory Remake',
            description: 'Cloning Cavestory in C++',
            image:
              'https://images.hdqwalls.com/download/singapore-skyscrapers-marina-bay-sands-evening-4k-es-2560x1440.jpg',
          }}
        />
        <ProjectCard
          project={{
            title: 'Natural Disaster Tweets',
            description: 'Categorizing Tweets',
            image:
              'https://images.hdqwalls.com/download/singapore-skyscrapers-marina-bay-sands-evening-4k-es-2560x1440.jpg',
          }}
        />
      </Box>
      <Box
        m={2}
        display="flex"
        flexDirection="row"
        flexWrap="nowrap"
        justifyContent="center"
      >
        <ProjectCard
          project={{
            title: 'Portfolio Website',
            description: 'Repository of this website',
            image:
              'https://images.hdqwalls.com/download/singapore-skyscrapers-marina-bay-sands-evening-4k-es-2560x1440.jpg',
          }}
        />
        <ProjectCard
          project={{
            title: 'MNIST Dataset',
            description: 'ML to read MNIST data',
            image:
              'https://images.hdqwalls.com/download/singapore-skyscrapers-marina-bay-sands-evening-4k-es-2560x1440.jpg',
          }}
        />
        <ProjectCard
          project={{
            title: 'Disaster Database',
            description: '',
            image:
              'https://images.hdqwalls.com/download/singapore-skyscrapers-marina-bay-sands-evening-4k-es-2560x1440.jpg',
          }}
        />
      </Box>
    </div>
  );
};

export default CardLayout;
