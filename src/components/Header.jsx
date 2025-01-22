import React, { useState } from 'react';
import './Header.css'; 

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
            <div className='header-container'>
                <h1 className="logo">Tres en raya</h1>
                <button className="toggle-button" onClick={toggleDarkMode}>
                    {darkMode ? 'Modo Claro' : 'Modo Oscuro'}
                </button>
            </div>
        </header>
    );
};

export default Header;