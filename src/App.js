import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Greetings from './Greeting.js';
import Name from './Name.js';
import {FunctionalWelcome,ClassWelcome} from './Welcome.js';

class App extends React.Component {
	constructor(props) {
  	super(props);
  }
  
  render(){
    return(
      <div>
        <Greetings message="Good Afternoon"/>
        <FunctionalWelcome welcome="Welcome" course="React" tutor="Ask Apps"/>
        <ClassWelcome welcome="Welcome" course="React" tutor="Ask Apps"/>
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
