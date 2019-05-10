import React from 'react';
import PropTypes from 'prop-types';

function JobBoardOptions(props) {
  return (
    <div>
      <button onClick={props.onOpenNewJob}>Add A Job</button>
    </div>
  )
};

JobBoardOptions.propTypes = {
  onOpenNewJob: PropTypes.func,
};

export default JobBoardOptions;