import React from 'react';
import styled from 'styled-components';

function LogButton(props) {
    const StyledButton = styled.button`
      margin: 5px;
      font-family: arial;
      font-size: 1em;
      font-size: ${p =>
        (p.size === "sm" && `0.8em`) ||
        (p.size === "md" && `1em`) ||
        (p.size === "lg" && `1.2em`) ||
        `1.2em`};
      color: ${p => p.color || "white"};
      font-weight: ${p => p.weight || "normal"}`

  return <StyledButton {...props}>{props.children}</StyledButton>
}

export default LogButton;