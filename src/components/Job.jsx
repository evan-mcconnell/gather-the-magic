import React from 'react';
import styled from 'styled-components';





function Job(props) {
  console.log('job', props);
  let headerColor;
  if (props.jobInfo.jobType = 'Test') {
    headerColor = '#0091FF';
  } else {
    headerColor = green;
  }

  const Card = styled.div`
    width: 90%;
    margin: 5px auto;
    border: 1px solid black;
    background-color: white;
  `;
  
  const JobHeader = styled.div`
    height: 25px;
    background-color: ${headerColor};
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 5px;`;
    
  return (
    <Card>
      <JobHeader>
        <h3>{props.jobInfo.jobType}</h3>
        <h5>{props.jobInfo.dueDate}</h5>
      </JobHeader>
      <div>
        {props.jobInfo.specialInstructions}
      </div>
    </Card>
  );
}

export default Job;