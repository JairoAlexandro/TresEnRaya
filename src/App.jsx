import React from 'react';
import Game from './components/Game';
import Header from './components/Header';
import Footer from './components/footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Game />
      <Footer />
    </div>
  );
}

export default App;