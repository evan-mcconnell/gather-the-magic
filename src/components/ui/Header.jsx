import React from 'react';
import LogButton from './LogButton';
import { Link } from 'react-router-dom';


function Header() {
  const linkStyle = {
    textDecoration: 'none',
    color: 'white'
  }

  return (
    <div className="main">
      <div className="top">
        <div className="authButtons">
          <LogButton color='black'>Sign In</LogButton>
          <LogButton color='black'>Something</LogButton>
        </div>
        <div className="links">
          <li>
            <Link to="/" style={linkStyle}>Home</Link>
          </li>
          <li>
            <Link to="/search" style={linkStyle}>Search</Link>
          </li>
          <li>
            <Link to="/collection" style={linkStyle}>Collection</Link>
          </li>
          <li>
            <Link to="/decks" style={linkStyle}>Decks</Link>
          </li>
        </div>
      </div>
      <h1>Gather the Magic</h1>
      <style jsx>{`
        .main {
          height: 160px;
          background-color: darkred;
          text-align: center;
        }
        .top {
          display: flex;
          flex-direction: row-reverse;
          justify-content: space-between;
        }
        .authButtons {
          display: flex;
          flex-direction: row;
          justify-content: flex-end;
        }
        .links {
          display: flex;
          flex-direction: row;
        }
        li {
          list-style-type: none;
          background-color: black;
          padding: 4px;
          margin: 5px;
        }
      `}</style>
    </div>
  );
}

export default Header;