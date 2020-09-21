import * as React from 'react'
import * as ReactDOM from 'react-dom'

const FunctionalComponent = () => {
   return (
   <div className="main">
      <h1 className="heading">Hello World from FunctionalComponent</h1>
   </div>
   )
};

/*
class ClassComponent extends React.Component {
	constructor(props) {
  	super(props);
  }
  
  render() {
    return (
      <div>
          <div className="main">
            <h1 className="heading">Hello World from ClassComponent</h1>
          </div>
      </div>
    )
  }
}
*/

ReactDOM.render(
  <FunctionalComponent />,
  document.getElementById('root')
);
