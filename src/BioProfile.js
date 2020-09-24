import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Name from './Name.js';
import Age from './Age.js';
import DateOfBirth from './DateOfBirth.js';
import Country from './Country.js';
import Skills from './Skills.js';

class BioProfile extends React.Component{
  constructor(props) {
  	super(props);
  }
  render(){
    const {index,name,age,dob,country,skills} = this.props;
    return (
    <div class="BioProfile">
      <Name value={name}/>
      <Age value={age}/>
      <DateOfBirth value={dob}/>
      <Country value={country}/>
      <Skills list={skills}/>
    </div>
    )
  }
}

export default BioProfile;