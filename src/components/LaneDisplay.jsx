import React from 'react';
import Lane from './Lane';
import masterLaneList from './../data';


function LaneDisplay() {
  console.log(masterLaneList);
  return (
    <div>
      {Object.keys(masterLaneList).map(function(laneId, index) {
        console.log("inside", masterLaneList[laneId]);
        return <Lane laneinfo={masterLaneList[laneId]}
          key={index} />;
      })}
    </div>
  );
}

export default LaneDisplay;