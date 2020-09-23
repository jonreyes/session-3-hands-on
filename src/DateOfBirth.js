import * as React from 'react'
import * as ReactDOM from 'react-dom'

class DateOfBirth extends React.Component {
	constructor(props) {
  	super(props);
  }
  
  render() {

    const {dob} = this.props;
    const dobArray = dob.split('/');
    const formattedDOB = [dobArray[1], dobArray[0], dobArray[2]].join('/');

    return (
        <div>
          <p><b>Date Of Birth: </b>{formattedDOB}</p>
        </div>
    )
  }
}

export default DateOfBirth;