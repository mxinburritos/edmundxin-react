import React, { useState } from "react";
import {
	Fade,
	Button,
	Grid,
	Typography,
	Container,
	makeStyles,
} from "@material-ui/core";
import cx from "classnames";

import styles from "./Jumbotron.module.css";
import createMixins from "@material-ui/core/styles/createMixins";

const Jumbotron = () => {
	return (
		<div fixed className={cx(styles.container, styles.overlay)}>
			<Grid
				container
				space={0}
				direction="column"
				alignItems="center"
				justify="center"
			>
				<Grid item xs={12}>
					<Typography>I'm Edmund Xin</Typography>
				</Grid>
				<Grid item xs={6}>
					<Button variant="contained">LinkedIn</Button>
					<Button variant="contained">GitHub</Button>
				</Grid>
			</Grid>
		</div>
	);
};

export default Jumbotron;
