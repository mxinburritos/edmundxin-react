import React from 'react';
import styled from 'styled-components';

import CardLayout from './components/ProjectCards/CardLayout';
import Contact from './components/Contact/Contact';
import Resume from './components/Resume/Resume';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Background from './assets/img/ryanHuttonJztmx9yqjbwUnsplash.png';

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
        {/* <Navbar /> */}
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/contactme' component={Contact} />
          <Route path='/resume' component={Resume} />
        </Switch>
      </BackgroundImage>
    </Router>
  );
};

export default App;
