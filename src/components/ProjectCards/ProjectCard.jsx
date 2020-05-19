import React from "react";
import {
	Card,
	Typography,
	makeStyles,
	CardActionArea,
	CardContent,
	Box,
} from "@material-ui/core";
import cx from "classnames";
import Masonry from "react-masonry-component";

import styling from "./ProjectCard.module.css";

const useStyles = makeStyles(() => ({
	root: {
		maxWidth: 304,
		margin: "auto",
		borderRadius: 0,
		position: "relative",
	},
	content: {
		padding: 24,
	},
	cta: {
		display: "block",
		textAlign: "center",
		color: "#000",
		letterSpacing: "3px",
		fontWeight: 200,
		fontSize: 12,
	},
	title: {
		color: "#000",
		letterSpacing: "2px",
	},
}));

const ProjectCard = () => {
	const styles = useStyles();
	return (
		<Box m={2}>
			<Card classNames={cx(styles.root, styling.card)}>
				<CardActionArea>
					<Box
						display={"flex"}
						flexDirection={"column"}
						alignItems={"center"}
						justifyContent={"center"}
						height={360}
						width={400}
						color={"common.white"}
						textAlign={"center"}
					>
						<CardContent>
							<Typography className={styles.title} variant="h1">
								Project
							</Typography>
							<Typography color="primary" variant="h3">
								Project Contents
							</Typography>
						</CardContent>
					</Box>
				</CardActionArea>
			</Card>
		</Box>
	);
};

export default ProjectCard;
