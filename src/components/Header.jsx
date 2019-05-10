import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const FlexDiv = styled.div`
  display: flex;
  flex-direction: row;
`;
const Main = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  margin-left: 15px;
  width: 60%;
  height: 70px;
`;
const Alinks = styled.p`
  font-size: 1em;
`;

function Header() {

  const linkStyle = {
    textDecoration: 'none',
    color: 'inherit',
    padding: '5px'
  };
  return (
    <Main>
      <FlexDiv>
        <h2>Digital Kanban</h2>
        <h4>Job Tracking for Your Buisness</h4>
      </FlexDiv>
      <FlexDiv>
        <Alinks><Link style={linkStyle} to="/">Jobs Board </Link></Alinks>
        <Alinks><Link style={linkStyle} to="/"> Inventory Board</Link></Alinks>
      </FlexDiv>
      <style jsx>{`
        Alinks {
          font-size: 1em;
          transition: font-size 0.5s;
          color: grey;
          padding: 10px;
        }
        Alinks:hover {
          font-size: 1.1em;

          color: black;
        }
        h4 {
          padding-top: 5px;
          padding-left: 30px;
        }
      `}</style>
    </Main>
  );
}

export default Header;