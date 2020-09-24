import * as React from 'react'
import * as ReactDOM from 'react-dom'

class Name extends React.Component {
	constructor(props) {
  	super(props);
  }
  
  render() {
    // console.log(this.props);
    return (
      <span>
        {this.props.value}
      </span>
    )
  }
}

export default Name;