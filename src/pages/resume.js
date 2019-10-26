import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import avatar from '../avatar.png';
import config from '../config';
import EducationContainer from '../components/education_container';

class ResumePage extends Component {
  render() {
    return (
      <div>
        <Grid className="resume-grid">
          <Cell className="resume-left-col" col={4}>
            <div style={{textAlign: 'center'}}>

              <img
                alt='avatar'
                src={avatar}
                className="avatar-img"
              />
            </div>

            <h2 style={{paddingTop: '2em'}}>{config.personal_info.name}</h2>
            <h4 style={{color: 'grey'}}>{config.personal_info.title}</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>

            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>

            <h5>Address</h5>
            <p>{config.personal_info.address}</p>

            <h5>Phone</h5>
            <p>{config.personal_info.phone}</p>

            <h5>Email</h5>
            <p><a href={`mailto: ${config.personal_info.email}`}>{config.personal_info.email}</a></p>

            <h5>Website</h5>
            <p><a href={config.personal_info.web} rel="noopener noreferrer" target="_blank" >{config.personal_info.web}</a></p>

          </Cell>

          <Cell className="resume-right-col" col={8}>
            <EducationContainer />
          </Cell>
        </Grid>
      </div>
    );
  }
}
export default ResumePage
