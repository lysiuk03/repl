import React from 'react';
import './Modal.css'; // Імпортуйте CSS для стилізації модального вікна

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    content: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, content }) => {
    if (!isOpen) return null; // Якщо модальне вікно не відкрите, не рендерити нічого

    return (
        <div className="modal">
            <div className="modal-content">
                <span className="close" onClick={onClose}>&times;</span>
                <h2>{title}</h2>
                <p>{content}</p>
            </div>
        </div>
    );
};

export default Modal;
