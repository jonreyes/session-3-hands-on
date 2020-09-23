import * as React from 'react'
import * as ReactDOM from 'react-dom'

const Country = (props) => {
   return (
   <div>
      <p>I am from {props.country}</p>
   </div>
   )
};

export default Country;
