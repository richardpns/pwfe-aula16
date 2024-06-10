import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/music-station">Music Station</Link></li>
        <li><Link to="/quiz-station">Quiz Station</Link></li>
        <li><Link to="/game-station">Game Station</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
