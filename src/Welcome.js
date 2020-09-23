import * as React from 'react'
import * as ReactDOM from 'react-dom'

/*
const Welcome = (props) => {
   return (
   <div>
      <p>{props.welcome} to {props.course}</p>
   </div>
   )
};
*/

class Welcome extends React.Component {
	constructor(props) {
  	super(props);
  }
  
  render() {

    const {welcome, course} = this.props;

    return (
        <div>
          <p>{welcome} to {course}</p>
        </div>
    )
  }
}

export default Welcome;