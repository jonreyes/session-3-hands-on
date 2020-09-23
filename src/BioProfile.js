import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Name from "./Name";
import Age from "./Age";
import DateOfBirth from "./DateOfBirth";
import Country from "./Country";
import Skills from "./Skills";

class BioProfile extends React.Component {
	constructor(props) {
  	super(props);
  }
  
  render() {
    var { name, age, dob, country, skills } = this.props;

    return (
        <div>
          <Name name={name} />
          <Age age={age} />
          <DateOfBirth dob={dob} />
          <Country country={country} />
          <Skills skills={skills} />
          <hr />
        </div>
    )
  }
}

export default BioProfile;