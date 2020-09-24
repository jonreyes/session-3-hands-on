import * as React from 'react'
import * as ReactDOM from 'react-dom'

class Name extends React.Component {
	constructor(props) {
  	super(props);
  }
  
  render() {
    // console.log(this.props);
    return (
      <p>
        <span class="label">Name: </span>{this.props.value}
      </p>
    )
  }
}

export default Name;