import React from "react";
import { Card, Grid, Box } from "@material-ui/core";
import Masonry from "react-masonry-component";

import ProjectCard from "./ProjectCard";

const masonryOptions = {
	transitionDuration: 0,
};

const CardLayout = () => {
	return (
		<React.Fragment>
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
		</React.Fragment>
	);
};

export default CardLayout;
