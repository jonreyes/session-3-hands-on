import * as React from 'react';
import * as ReactDOM from 'react-dom';
// Import BioProfiles here
import BioProfiles from "./BioProfiles";

class App extends React.Component {
	constructor(props) {
  	super(props);
  }
  
  // Plugin the BioProfiles component within the div

  render() {
    return (
      <div>
          <BioProfiles />
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
