// src/App.js
import React from 'react';
import './App.css';
import YouTube from 'react-youtube';

const videos = [
  {
    id: 1,
    title: 'Luffy vs Kaido',
    videoId: 'gr8reTtElqc', // ID del video de YouTube
  },
  {
    id: 2,
    title: 'Luffy vs Lucci',
    videoId: 'scPBmrzdD0g', // ID del video de YouTube
  },
  {
    id: 3,
    title: 'Zoro vs King',
    videoId: 'Zuu6ClXRabE', // ID del video de YouTube
  },
];

function App() {
  const opts = {
    height: '250',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="header-top">
          <h1 className="App-title">AluraFlix</h1>
          <div className="header-buttons">
            <button>Inicia sesión</button>
            <button>Únete</button>
          </div>
        </div>
      </header>
      <main className="main-content">
        <p className="description">
          Esta es mi plataforma AluraFlix, donde mostraré los mejores videos seleccionados de YouTube.
        </p>
        <div className="video-list">
          {videos.map(video => (
            <div key={video.id} className="video">
              <h2>{video.title}</h2>
              <YouTube videoId={video.videoId} opts={opts} />
            </div>
          ))}
        </div>
      </main>
      <footer>
        <p>Manuel Chong Aluraflix Challenge</p>
      </footer>
    </div>
  );
}

export default App;
