import React, { useState } from 'react';
import './MusicStation.css';

const songs = [
  { title: 'Song 1', src: './components/song1.mp3' },
  { title: 'Song 2', src: './components/song2.mp3' },
  { title: 'Song 3', src: './components/song3.mp3' }
];

function MusicStation() {
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
    const audio = document.getElementById('audio-player');
    isPlaying ? audio.pause() : audio.play();
  };

  const handleNext = () => {
    setCurrentSongIndex((currentSongIndex + 1) % songs.length);
  };

  const handlePrev = () => {
    setCurrentSongIndex((currentSongIndex - 1 + songs.length) % songs.length);
  };

  return (
    <div className="music-station-container">
      <h1 className="music-station-header">Music Station</h1>
      <h2>{songs[currentSongIndex].title}</h2>
      <audio id="audio-player" src={songs[currentSongIndex].src}></audio>
      <div className="audio-controls">
        <button onClick={handlePrev}>Previous</button>
        <button onClick={handlePlayPause}>{isPlaying ? 'Pause' : 'Play'}</button>
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  );
}

export default MusicStation;
