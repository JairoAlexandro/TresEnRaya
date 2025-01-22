import React, { useState } from 'react';
import './Header.css'; // Asegúrate de crear este archivo para los estilos

const Header = () => {
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        if (darkMode) {
            document.body.classList.remove('dark-mode');
        } else {
            document.body.classList.add('dark-mode');
        }
    };

    return (
        <header className="header">
            <h1 className="logo">Tres en raya</h1>
            <button className="toggle-button" onClick={toggleDarkMode}>
                {darkMode ? 'Modo Claro' : 'Modo Oscuro'}
            </button>
        </header>
    );
};

export default Header;