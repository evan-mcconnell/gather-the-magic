import React from 'react';
import styled from 'styled-components';





function Job(props) {
  console.log('job', props);
  let headerColor;
  if (props.jobInfo.jobType === 'Test') {
    headerColor = '#0091FF';
  } else {
    headerColor = "#1db001";
  }

  const Card = styled.div`
    width: 90%;
    margin: 5px auto;
    border: 1px solid black;
    background-color: white;
    height: 100px;
  `;
  const MainCard = styled.div`
    padding: 5px;
    font-family: arial;
  `;
  const InventoryInfo = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
  `;
  const JobHeader = styled.div`
    height: 30px;
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
      <MainCard>
        {props.jobInfo.specialInstructions}<br></br>
        <InventoryInfo>
          {props.lane}
          <a href="">Inventory</a>
        </InventoryInfo>
      </MainCard>
    </Card>
  );
}

export default Job;