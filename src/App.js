import * as React from 'react'
import * as ReactDOM from 'react-dom'

// Comment out the below lines to create your functional component

const FunctionalComponent = () => {
   return (
   <div className="main">
      <h1 className="heading">Hello World from FunctionalComponent</h1>
   </div>
   )
};

// Comment out the below lines to create your class-based component

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

ReactDOM.render(
  <FunctionalComponent />,
  document.getElementById('root')
);
ReactDOM.render(
  <FunctionalComponent />,
  document.getElementById('root')
);

const CustomFunctionalComponent = () => {
  return (
    <div id="CustomFunctionalComponent">
      <p id="customtext">This is a custom Functional Component.</p>
    </div>
  )
};

ReactDOM.render(
  <CustomFunctionalComponent/>,
  document.getElementById('root')
);

class CustomClassComponent extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div id="CustomClassComponent">
        <p id="customtext">This is a custom Class Component.</p>
      </div>
    )
  }
}

ReactDOM.render(
  <CustomClassComponent/>,
  document.getElementById('root')
)