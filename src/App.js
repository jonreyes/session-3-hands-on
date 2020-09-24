import * as React from 'react';
import * as ReactDOM from 'react-dom';
// Import BioProfiles here
import BioProfiles from "./BioProfiles.js";
class App extends React.Component {
	constructor(props) {
  	super(props);
  }
  
  // Plugin the BioProfiles component within the div

  render() {
    return (
        <BioProfiles/>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
