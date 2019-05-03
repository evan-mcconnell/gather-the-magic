import React from 'react';
import Lane from './Lane';
import masterLaneList from './../data';


function LaneDisplay() {
  console.log(masterLaneList);
  return (
    <div>
      {Object.keys(masterLaneList).map(function(laneId, index) {
        let lane = masterLaneList[laneId];
        <Lane laneinfo={lane.name}
            key={index} />;
      })}
    </div>
  );
}

export default LaneDisplay;