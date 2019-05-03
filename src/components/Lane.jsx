import React from 'react';

function Lane(props) {
  console.log(props)
  return (
    <div>
      <p>hello from lane</p>
      <p>{props.laneinfo.name}</p>
    </div>
  );
}

export default Lane;