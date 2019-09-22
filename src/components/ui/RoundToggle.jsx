import React from 'react';
import styled from 'styled-components';

function RoundToggle(props) {

  const StyledDiv = styled.div`
    border-radius: 50%;
    height: ${p => (p.height || `50px`)};
    width: ${p => (p.width || `50px`)};
    background-color: ${
        p => p.active ? 
        p.colorActive || 'lightgrey' : 
        p.colorInactive || 'grey'
      };
    border: 1px solid black;
    box-shadow: 1px 1px 4px black, inset 1px -2px 2px rgba(0,0,0,0.5), inset 2px 2px 2px rgba(255,255,255,0.5);
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
  `
  const StyledInnerDiv = styled.div`
    font-size: 10px;
  
  `

  return  <StyledDiv {...props}>
            <StyledInnerDiv {...props}> {props.children} </StyledInnerDiv>
          </StyledDiv>
}

export default RoundToggle;