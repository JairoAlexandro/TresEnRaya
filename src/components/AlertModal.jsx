import React from 'react';
import './AlertModal.css';

function AlertModal({ message, onClose }) {
  return (
    <div className="alert-modal">
      <div className="alert-modal-content">
        <span className="alert-modal-close" onClick={onClose}>&times;</span>
        <p>{message}</p>
      </div>
    </div>
  );
}

export default AlertModal;