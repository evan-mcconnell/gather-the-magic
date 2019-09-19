import React from 'react';
import LogButton from './LogButton';
import { Link } from 'react-router-dom';


function Header() {

  return (
    <div className="main">
      <div className="authButtons">
        <LogButton color='black'>Sign In</LogButton>
        <LogButton color='black'>Something</LogButton>
      </div>
      <div>
      <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/search">Search</Link>
            </li>
      </div>
      <h1>Gather the Magic</h1>
      <style jsx>{`
        .main {
          height: 200px;
          background-color: darkred;
          text-align: center;
        }
        .authButtons {
          display: flex;
          flex-direction: row;
          justify-content: flex-end;
        }
      `}</style>
    </div>
  );
}

export default Header;