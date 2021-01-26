import React from 'react';
import {
  Card,
  Typography,
  makeStyles,
  CardActionArea,
  CardContent,
  Box,
  CardMedia,
} from '@material-ui/core';
import cx from 'classnames';

import styling from './ProjectCard.module.css';

const useStyles = makeStyles(() => ({
  root: {
    maxWidth: 400,
    margin: 'auto',
    borderRadius: 0,
    position: 'relative',
  },
  content: {
    padding: 24,
  },
  cta: {
    display: 'block',
    textAlign: 'center',
    color: '#000',
    letterSpacing: '3px',
    fontWeight: 200,
    fontSize: 12,
  },
  title: {
    color: '#000',
    letterSpacing: '2px',
  },
  media: {
    height: 200,
  },
}));

const ProjectCard = ({ project }) => {
  const styles = useStyles();
  console.log(project.title);
  return (
    <Box m={2}>
      <Card classNames={cx(styles.root, styling.card)}>
        <CardActionArea>
          <CardMedia
            className={styles.media}
            image={project.image}
            title="Singapore"
          />
          <Box
            display={'flex'}
            flexDirection={'column'}
            alignItems={'center'}
            justifyContent={'flex-end'}
            height={120}
            width={300}
            color={'common.white'}
            textAlign={'center'}
          >
            <CardContent>
              <Typography gutterBottom className={styles.title} variant="h6">
                {project.title}
              </Typography>
              <Typography gutterBottom color="primary" variant="subtitle1">
                {project.description}
              </Typography>
            </CardContent>
          </Box>
        </CardActionArea>
      </Card>
    </Box>
  );
};

export default ProjectCard;
