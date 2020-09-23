import * as React from 'react';
import * as ReactDOM from 'react-dom';
import BioProfile from "./BioProfile";
import { bioProfiles } from "./constants";

class BioProfiles extends React.Component {
	constructor(props) {
  	super(props);
  }
  
  render() {
    var profiles = bioProfiles;

    return (
      // Pass in the required props to BioProfile component
        <div>
          {
            profiles.map(({ name, age, dob, country, skills}, index) => {

              return (
                <BioProfile
                  key={}
                  name={}
                  age={}
                  dob={}
                  country={}
                  skills={}
                />
              )

            })
          }
        </div>
    )
  }
}

// Export BioProfiles Component