import React, { useState } from "react";
import {
	Fade,
	Button,
	Grid,
	Typography,
	Container,
	makeStyles,
	CardMedia,
} from "@material-ui/core";
import { useGradientBtnStyles } from "@mui-treasury/styles/button/gradient";
import { usePushingGutterStyles } from "@mui-treasury/styles/gutter/pushing";
import cx from "classnames";
import Box from "@material-ui/core/Box";

import Navbar from "../Navbar/Navbar";
import CardLayout from "../ProjectCards/CardLayout";

import styles from "./Jumbotron.module.css";

const Jumbotron = () => {
	return (
		<CardMedia image="">
			<Navbar />
			<CardLayout />
		</CardMedia>
	);
};

export default Jumbotron;
