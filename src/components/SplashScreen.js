import React from 'react';
import { useNavigate } from 'react-router-dom';

const SplashScreen = () => {
  const navigate = useNavigate();

  const handleEnter = () => {
    navigate('/home');
  };

  const handleRegister = () => {
    // Aqui seria implementada a lógica de cadastro
    alert('Funcionalidade de cadastro será implementada em breve!');
  };

  const handleGuest = () => {
    navigate('/home');
  };

  return (
    <div className="container">
      <div className="splash-container">
        <div className="logo">
          🌿 MENTE ABERTA
        </div>
        <p className="tagline">
          "Cuidar da mente é um ato de coragem."
        </p>
        
        <div className="button-group">
          <button className="btn btn-primary" onClick={handleEnter}>
            Entrar
          </button>
          <button className="btn btn-secondary" onClick={handleRegister}>
            Cadastrar
          </button>
        </div>
        
        <a href="#" className="guest-link" onClick={(e) => {
          e.preventDefault();
          handleGuest();
        }}>
          ou usar como convidado 🕊️
        </a>
      </div>
    </div>
  );
};

export default SplashScreen;
