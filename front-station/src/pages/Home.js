import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <div className="home-header">
        <h1>Front Station</h1>
        <p>Mais basico e simples não existe</p>
      </div>
      <div className="cards">
        <Link to="/music-station">
          <div className="card">Music Station</div>
        </Link>
        <Link to="/quiz-station">
          <div className="card">Quiz Station</div>
        </Link>
        <Link to="/game-station">
          <div className="card">Game Station</div>
        </Link>
      </div>
    </div>
  );
}

export default Home;
