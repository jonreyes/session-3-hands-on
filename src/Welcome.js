import * as React from 'react';
import * as ReactDOM from 'react-dom';

const FunctionalWelcome = (props) => {
   return (
     <div>
      <p><i>{props.welcome} to {props.course} from {props.tutor}!</i></p>
     </div>
   )
};

class ClassWelcome extends React.Component {
	constructor(props) {
  	super(props);
  }
  
  render() {
    // console.log(this.props);
    const {welcome,course,tutor} = this.props;
    return (
       <div>
        <p><i>{welcome} to {course} from {tutor}!</i></p>
       </div>
    )
  }
};

export {FunctionalWelcome,ClassWelcome};

