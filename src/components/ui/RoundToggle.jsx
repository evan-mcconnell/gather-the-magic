import React from 'react';
import styled from 'styled-components';

function RoundToggle(props) {
  const StyledDiv = styled.div`
    border-radius: 50%;
    height: ${p => (p.height || `50px`)};
    width: ${p => (p.width || `50px`)};
  `
  return <StyledDiv {...props}>{props.children}</StyledDiv>
}

export default RoundToggle;