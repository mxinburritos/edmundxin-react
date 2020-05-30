import React from 'react';

import CardLayout from './components/ProjectCards/CardLayout';
import Contact from './components/Contact/Contact';
import Resume from './components/Resume/Resume';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route path="/" exact component={CardLayout} />
          <Route path="/contactme" component={Contact} />
          <Route path="/resume" component={Resume} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
