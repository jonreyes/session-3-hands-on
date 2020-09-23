import * as React from 'react'
import * as ReactDOM from 'react-dom'

class Skill extends React.Component {
	constructor(props) {
  	super(props);
  }
  
  render() {

    const { skill } = this.props;

    return (
        <ul>{skill}</ul>
    )
  }
}

export default Skill;