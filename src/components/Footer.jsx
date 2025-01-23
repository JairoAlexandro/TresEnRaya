import React, { useState } from 'react';
import './Footer.css';
import AlertModal from './AlertModal';

function Footer() {
  const [modalMessage, setModalMessage] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showWins = () => {
    const wins = JSON.parse(localStorage.getItem('Victorias')) || { X: 0, O: 0 };
    setModalMessage(`X: ${wins.X} Victorias, O: ${wins.O} Victorias`);
    setIsModalOpen(true);
  };

  const resetWins = () => {
    localStorage.setItem('Victorias', JSON.stringify({ X: 0, O: 0 }));
    setModalMessage('Contador reiniciado');
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalMessage('');
  };

  return (
    <footer>
      <button onClick={showWins}>Mostrar victorias</button>
      <button onClick={resetWins}>Reiniciar contador</button>
      {isModalOpen && <AlertModal message={modalMessage} onClose={closeModal} />}
    </footer>
  );
}

export default Footer;