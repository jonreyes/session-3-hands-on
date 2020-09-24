import * as React from 'react'
import * as ReactDOM from 'react-dom'
import Name from './Name.js';

const Greetings = (props) => {
   return (
     <div>
      <h1>{props.message}, <Name value="Jon"/>!</h1>
     </div>
   )
};

export default Greetings;