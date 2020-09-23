import * as React from 'react';
import * as ReactDOM from 'react-dom';
// Import BioProfiles here

class App extends React.Component {
	constructor(props) {
  	super(props);
  }
  
  // Plugin the BioProfiles component within the div

  render() {
    return (
      <div>
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
