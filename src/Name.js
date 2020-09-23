import * as React from 'react'
import * as ReactDOM from 'react-dom'

class Name extends React.Component {
	constructor(props) {
  	super(props);
  }
  
  render() {

    const {person} = this.props;

    return (
        <div>
          <p>{person}</p>
        </div>
    )
  }
}

export default Name;