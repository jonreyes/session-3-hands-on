import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Greeting from "./Greeting";
import Name from "./Name";

class App extends React.Component {
	constructor(props) {
  	super(props);
  }
  
  render() {
    return (
      <div>
          <Greeting message="Good Evening"/>
          <Name person="Gokkul"/>
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
