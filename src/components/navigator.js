import React from 'react';
import { NavLink } from 'react-router-dom';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';

const AppNavigator = () => (
  <Navigation>
      <NavLink to="/">Home page</NavLink>
      <NavLink to="/about">About me</NavLink>
      <NavLink to="/resume">Resume</NavLink>
      <NavLink to="/projects">Projects</NavLink>
      <NavLink to="/contact">Contact</NavLink>
  </Navigation>
)

export default AppNavigator;
