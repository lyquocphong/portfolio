import React from 'react';
import LandingPage from '../pages/landing';
import ResumePage from '../pages/resume';
import ProjectsPage from '../pages/projects';
import AboutPage from '../pages/aboutme';
import ContactPage from '../pages/contact';

import { Route, Switch } from 'react-router-dom'

const AppRouter = () => (
  <Switch>
    {/* Using the `component` prop */}
    <Route exact path="/" component={LandingPage} />
    <Route path="/about" component={AboutPage} />
    <Route path="/resume" component={ResumePage} />
    <Route path="/projects" component={ProjectsPage} />
    <Route path="/contact" component={ContactPage} />
    />
  </Switch>
)

export default AppRouter;
