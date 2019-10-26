import React, { Component } from 'react'
import { Grid, Cell } from 'react-mdl';

class Education extends Component {
  render() {
    console.log(this.props);
    return (
      <React.Fragment>
        <Grid>
          <Cell col={4}>
            <p>{this.props.startYear} - {this.props.endYear}</p>
          </Cell>

          <Cell col={8}>
            <h4 style={{marginTop: '0px'}}>{this.props.schoolName}</h4>
            <p>{this.props.schoolDescription}</p>
            {
              this.props.degreeImage != '' ?
              <a href={this.props.degreeImage} rel="noopener noreferrer" target="_blank">
                <img
                  alt='degree'
                  style={{width: '50%'}}
                  src={this.props.degreeImage}
                  className="degree-img"
                />
              </a> : ''
            }
          </Cell>
        </Grid>
      </React.Fragment>
    );
  }
}
export default Education
