import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import avatar from '../avatar.png';
import config from '../config';

class LandingPage extends Component {
  render() {
    return (
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              alt='avatar'
              src={avatar}
              className="avatar-img"
            />

            <div className="banner-text">
              <h1>Fullstack Web Developer</h1>

              <hr/>

              <p>HTML/CSS | Bootstrap | Javascript | React | PHP | MySQL | MongoDB</p>

              <div className="social-links">

                {/*Linkded*/}
                <a href={config.social_links.linkedin} rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-linkedin-square" aria-hidden="true" />
                </a>

                {/*Github*/}
                <a href={config.social_links.github} rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-github-square" aria-hidden="true" />
                </a>
              </div>

            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}
export default LandingPage
