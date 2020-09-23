import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Greeting from "./Greeting";
import Name from "./Name";
import Welcome from "./Welcome";

class App extends React.Component {
	constructor(props) {
  	super(props);
  }
  
  render() {
    return (
      <div>
          <Greeting message="Good Evening"/>
          <Name person="John"/>
          <Welcome welcome="Welcome" tutor="Ask Apps" course="React" />
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
