import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import MusicStation from './pages/MusicStation';
import QuizStation from './pages/QuizStation';
import GameStation from './pages/GameStation';
import Navbar from './components/Navbar';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<PrivateRoute><Home /></PrivateRoute>} />
        <Route path="/music-station" element={<PrivateRoute><MusicStation /></PrivateRoute>} />
        <Route path="/quiz-station" element={<PrivateRoute><QuizStation /></PrivateRoute>} />
        <Route path="/game-station" element={<PrivateRoute><GameStation /></PrivateRoute>} />
        <Route path="/" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;