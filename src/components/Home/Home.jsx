import React from 'react';
import { styled } from '@material-ui/core/styles';
import { Box, Typography, Button, Grid } from '@material-ui/core';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

import Resume from '../../assets/docs/resume.pdf';
import styles from './Home.module.css'

library.add(fab);

const Title = styled(Typography)({
	color: 'white',
	fontSize: '60px',
	fontWeight: 'bold',
	marginBottom: '-0.1em',
});

const Subtitle = styled(Typography)({
	color: 'white',
	fontSize: '15px',
});

const TitleCard = styled(Box)({
	position: 'absolute',
	left: 0,
	right: 0,
	top: 0,
	bottom: 0,
	margin: 'auto',
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
	fontFamily: 'Poppins !important',

	backdropFilter: 'blur(3px)',

	'&:hover': {
		backgroundColor: 'rgb(255, 255, 255, 0.2)',
	},
});

const Home = () => {
	return (
		<TitleCard
			display='flex'
			flexDirection='column'
			justifyContent='center'
			alignItems='center'
			height='60%'
		>
			<Title className={styles.font}>I'm Edmund Xin.</Title>
			<Subtitle className={styles.font}>{'Software Engineer \u2758 Georgia Tech Student'}</Subtitle>
			<Grid justify='center' container spacing={3}>
				<Grid item>
					<Link to='/projects' style={{ textDecoration: 'none' }}>
						<ChubbyButton target='_blank' className={styles.font}>Portfolio</ChubbyButton>
					</Link>
				</Grid>
				<Grid item>
					<ChubbyButton href={Resume} target='_blank' className={styles.font}>
						Resume
					</ChubbyButton>
				</Grid>
			</Grid>
			<Grid justify='center' container spacing={3}>
				<Grid item>
					<a href='https://www.github.com/mxinburritos' target='_blank' rel="noopener noreferrer">
						<FontAwesomeIcon icon={['fab', 'github']} size='2x' color='white' />
					</a>
				</Grid>
				<Grid item>
					<a
						href='https://www.linkedin.com/in/edmund-xin-771937176/'
						target='_blank'
						rel="noopener noreferrer"
					>
						<FontAwesomeIcon
							icon={['fab', 'linkedin']}
							size='2x'
							color='white'
						/>
					</a>
				</Grid>
				<Grid item>
					<a href='https://www.instagram.com/edmund.xin/' target='_blank' rel="noopener noreferrer">
						<FontAwesomeIcon
							icon={['fab', 'instagram']}
							size='2x'
							color='white'
						/>
					</a>
				</Grid>
				<Grid item>
					<a href='https://twitter.com/mxinburritos' target='_blank' rel="noopener noreferrer">
						<FontAwesomeIcon
							icon={['fab', 'twitter']}
							size='2x'
							color='white'
						/>
					</a>
				</Grid>
				<Grid item>
					<a href='https://www.facebook.com/mxinburritos/' target='_blank' rel="noopener noreferrer">
						<FontAwesomeIcon
							icon={['fab', 'facebook']}
							size='2x'
							color='white'
						/>
					</a>
				</Grid>
			</Grid>
		</TitleCard>
	);
};

export default Home;
