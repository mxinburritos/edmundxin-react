import React from "react";
import { AppBar, Toolbar, Button, Typography, Grid } from "@material-ui/core";

const Navbar = () => {
	return (
		<AppBar color="transparent" position="static" elevation={0}>
			<Toolbar>
				<Grid container justify="space-between" spacing={24}>
					<Grid item>
						<Typography
							type="title"
							variant="h6"
							color="inherit"
							style={{ marginLeft: 100 }}
						>
							Edmund Xin
						</Typography>
					</Grid>
					<Grid item>
						<div style={{ marginRight: 100 }}>
							<Button pt={100}>Projects</Button>
							<Button>Resume</Button>
							<Button>Contact Me</Button>
						</div>
					</Grid>
				</Grid>
			</Toolbar>
		</AppBar>
	);
};

export default Navbar;
