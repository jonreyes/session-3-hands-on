import * as React from 'react';
import * as ReactDOM from 'react-dom';

class DateOfBirth extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    const [day,month,year] = this.props.value.split('/');
    const fdob = month+"/"+day+"/"+year;
    return(
      <p><span class="label">Date of Birth: </span>{fdob}</p>
    )
  }
}

export default DateOfBirth;