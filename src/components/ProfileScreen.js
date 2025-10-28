import React, { useState } from 'react';

const ProfileScreen = () => {
  const [selectedMood, setSelectedMood] = useState('😊');
  const [userName] = useState('Usuário');

  const moods = ['😊', '😌', '😐', '😔', '😢'];

  const handleMoodSelect = (mood) => {
    setSelectedMood(mood);
    alert(`Humor atualizado para: ${mood}\n\nObrigado por compartilhar como está se sentindo!`);
  };

  const handleSettingsClick = (setting) => {
    alert(`Configuração: ${setting}\n\nEsta funcionalidade será implementada em breve!`);
  };

  const handleLogout = () => {
    if (window.confirm('Tem certeza que deseja sair?')) {
      alert('Logout realizado com sucesso!');
      // Aqui seria implementada a lógica de logout
    }
  };

  return (
    <div className="container">
      <div className="header">
        <h1>👤 Meu Perfil</h1>
        <p>Seu espaço pessoal</p>
      </div>
      
      <div className="content">
        <div className="profile-section">
          <div className="profile-header">
            <div className="profile-avatar">
              👤
            </div>
            <div className="profile-info">
              <h2>{userName}</h2>
              <p>Membro desde outubro 2024</p>
            </div>
          </div>
          
          <div>
            <h3>Como você está hoje?</h3>
            <div className="mood-selector">
              {moods.map((mood) => (
                <button
                  key={mood}
                  className={`mood-btn ${selectedMood === mood ? 'selected' : ''}`}
                  onClick={() => handleMoodSelect(mood)}
                >
                  {mood}
                </button>
              ))}
            </div>
          </div>
        </div>
        
        <div className="profile-section">
          <h3>📊 Suas Estatísticas</h3>
          <div className="profile-stats">
            <div className="stat-item">
              <div className="stat-number">3</div>
              <div className="stat-label">Eventos participados</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">5</div>
              <div className="stat-label">Artigos lidos</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">12</div>
              <div className="stat-label">Dias de uso</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">8</div>
              <div className="stat-label">Conversas no chat</div>
            </div>
          </div>
        </div>
        
        <div className="profile-section">
          <h3>⚙️ Configurações</h3>
          <a
            href="#"
            className="settings-item"
            onClick={(e) => {
              e.preventDefault();
              handleSettingsClick('Notificações');
            }}
          >
            <span className="settings-icon">💚</span>
            <span className="settings-text">Ajustar notificações</span>
            <span className="settings-arrow">›</span>
          </a>
          
          <a
            href="#"
            className="settings-item"
            onClick={(e) => {
              e.preventDefault();
              handleSettingsClick('Privacidade');
            }}
          >
            <span className="settings-icon">🔒</span>
            <span className="settings-text">Privacidade</span>
            <span className="settings-arrow">›</span>
          </a>
          
          <a
            href="#"
            className="settings-item"
            onClick={(e) => {
              e.preventDefault();
              handleSettingsClick('Sobre o app');
            }}
          >
            <span className="settings-icon">ℹ️</span>
            <span className="settings-text">Sobre o app</span>
            <span className="settings-arrow">›</span>
          </a>
          
          <a
            href="#"
            className="settings-item"
            onClick={(e) => {
              e.preventDefault();
              handleLogout();
            }}
          >
            <span className="settings-icon">🚪</span>
            <span className="settings-text">Sair</span>
            <span className="settings-arrow">›</span>
          </a>
        </div>
        
        <div className="card">
          <h3>💡 Dica</h3>
          <p>Compartilhar seu humor diário ajuda a acompanhar seu bem-estar ao longo do tempo.</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileScreen;
