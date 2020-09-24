import * as React from 'react';
import * as ReactDOM from 'react-dom';

const Age = (props) => {
  return (
    <p><span class="label">Age:</span> {props.value}</p>
  )
}

export default Age;