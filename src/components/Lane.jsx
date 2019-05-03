import React from 'react';
import styled from 'styled-components';
import {masterJobsList} from './../data';
import Job from './Job';


const Main = styled.div`
  height: 100%;
  flex-grow: 1;
`
const LaneName = styled.div`
  text-align: center;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  height: 40px;
`


function Lane(props) {
  console.log(props)
  return (
    <Main>
      <LaneName>
        <h4>{props.laneinfo.name}</h4>
      </LaneName>
      <div className="lane-content">
      {Object.keys(masterJobsList).map(function(jobId, index) {
          console.log("inside", masterJobsList[jobId]);
          return <Job laneinfo={masterJobsList[jobId]}
            key={index} />;
        })}
      </div>
      <style jsx>{`
        h4 {
          margin-top: 10px;
          font-size: 1.2em
        }
        .lane-content {
          height: 50vw;
          background-color: lightgrey; 
      // background color will be a function to gradually show a gradient of greys
          border: 1px solid black;

        }
      `}</style>
    </Main>
  );
}

export default Lane;