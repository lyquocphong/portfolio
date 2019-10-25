import React from 'react';
import LandingPage from '../pages/landing';
import ResumePage from '../pages/resume';
import ProjectsPage from '../pages/projects';

import { Route, Switch } from 'react-router-dom'

const AppRouter = () => (
  <Switch>
    {/* Using the `component` prop */}
    <Route exact path="/" component={LandingPage} />
    <Route path="/resume" component={ResumePage} />
    <Route path="/projects" component={ProjectsPage} />
    />
  </Switch>
)

export default AppRouter;
