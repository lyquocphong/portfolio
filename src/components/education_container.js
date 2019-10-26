import React, { Component } from 'react';
import config from '../config';
import Education from './education';

class EducationContainer extends Component {
  render() {
    return (
      <React.Fragment>
        <h2>Education</h2>

        {config.educations.map((education, i) => {
           console.log("Entered");
           // Return the element. Also pass key     
           return (<Education key={i} {...education} />)
        })}
      </React.Fragment>
    );
  }
}
export default EducationContainer
