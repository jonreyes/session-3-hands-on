import * as React from 'react';
import * as ReactDOM from 'react-dom';

const Country = (props) => {
  let value = props.value;
  if (value===''){
    value = 'United States of America';
  }
  return (
    <p>I am from {value}</p>
  )
}

export default Country;