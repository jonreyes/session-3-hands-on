import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Skill from './Skill.js';

class Skills extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    const skills = this.props.list;
    return(
    <p>I am skilled in:
      {skills.map((skill)=>{
        return (
          <Skill value={skill}/>
        )
      })}
      </p>
    )
  }
}

export default Skills;