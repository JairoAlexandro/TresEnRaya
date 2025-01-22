import React from 'react';
import Game from './components/Game';
import Header from './components/Header';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="game-container">
        <Game />
      </div>
    </div>
  );
}

export default App;