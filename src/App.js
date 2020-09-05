import React from 'react';
import styled from 'styled-components';

import CardLayout from './components/ProjectCards/CardLayout';
import Contact from './components/Contact/Contact';
import About from './components/About/About';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Projects from './components/Projects/Projects';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
} from 'react-router-dom';
import SlideRoutes from 'react-slide-routes';
import Background from './assets/img/ryanHuttonJztmx9yqjbwUnsplash.jpg';

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
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/projects' component={Projects} />
          <Route path='/about' component={About} />
          <Route path='/contact' component={Contact} />
        </Switch>
      </BackgroundImage>
    </Router>
  );
};

export default App;
