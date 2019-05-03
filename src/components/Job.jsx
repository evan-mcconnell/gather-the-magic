import React from 'react';
import styled from 'styled-components';


const Card = styled.div`
  width: 90%;
  margin: 5px auto;
  border: 1px solid black;
  background-color: white;
`

const JobHeader = styled.div`
  height: 25px;
  background-color: #0091FF;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 5px;
`

function Job(props) {
  return (
    <Card>
      <JobHeader>
        <h3>{props.jobinfo.jobType}</h3>
        <h5>{props.jobinfo.dueDate}</h5>
      </JobHeader>
      <div>
        {props.jobinfo.specialInstructions}
      </div>
    </Card>
  );
}

export default Job;