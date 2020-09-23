import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Skill from "./Skill";

class Skills extends React.Component {
	constructor(props) {
  	super(props);
  }
  
  render() {
    var { skills } = this.props;

    return (
        <div>
        <p>I am skilled in:</p>
          {
            skills.map((skill, index) => {

              return (
                <Skill
                  key={index}
                  skill={skill}
                />
              )

            })
          }
        </div>
    )
  }
}

export default Skills;