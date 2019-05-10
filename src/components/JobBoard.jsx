import React from 'react';
import LaneDisplay from './LaneDisplay';
import JobBoardOptions from './JobBoardOptions';

function JobBoard() {
  return (
    <div>
      <JobBoardOptions />
      <LaneDisplay />
    </div>
  );
}

export default JobBoard;