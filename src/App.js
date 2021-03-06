import React from "react";
import styled from "styled-components";

import About from "./components/About/About";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Projects from "./components/Projects/Projects";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { AnimatedSwitch } from "react-router-transition";
import Background from "./assets/img/ryanHuttonJztmx9yqjbwUnsplash.jpg";
import Attribution from "./components/Attribution/Attribution";

const BackgroundImage = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;

  margin: 0;
  padding: 0;

  background-image: url(${Background});
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
`;

const App = () => {
  return (
    <Router>
      <BackgroundImage>
        <Navbar />
        <AnimatedSwitch
          atEnter={{ opacity: 0 }}
          atLeave={{ opacity: 0 }}
          atActive={{ opacity: 1 }}
          className="switch-wrapper"
        >
          <Route path="/" exact component={Home} />
          <Route path="/projects" component={Projects} />
          <Route path="/about" component={About} />
        </AnimatedSwitch>
      </BackgroundImage>
      <Attribution />
    </Router>
  );
};

export default App;
