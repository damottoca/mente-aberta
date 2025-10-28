import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomeScreen = () => {
  const navigate = useNavigate();

  const menuItems = [
    {
      icon: '💬',
      title: 'Conversar com alguém',
      route: '/chat'
    },
    {
      icon: '📖',
      title: 'Ler sobre saúde mental',
      route: '/content'
    },
    {
      icon: '🎪',
      title: 'Eventos e grupos locais',
      route: '/map'
    },
    {
      icon: '🏥',
      title: 'Locais de apoio psicológico',
      route: '/map'
    }
  ];

  const handleMenuClick = (route) => {
    navigate(route);
  };

  return (
    <div className="container">
      <div className="header">
        <h1>👋 Olá, Usuário!</h1>
        <p>Como você está hoje? 💚</p>
      </div>
      
      <div className="content">
        <div className="menu-grid">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className="menu-item"
              onClick={() => handleMenuClick(item.route)}
            >
              <span className="menu-icon">{item.icon}</span>
              <div className="menu-title">{item.title}</div>
            </div>
          ))}
        </div>
        
        <div className="card">
          <h3>💡 Dica do dia</h3>
          <p>Respire fundo por 4 segundos, segure por 4 segundos e expire por 6 segundos. Esta técnica pode ajudar a reduzir a ansiedade.</p>
        </div>
        
        <div className="card">
          <h3>📊 Seu progresso</h3>
          <p>Você já leu 3 artigos este mês e participou de 1 evento. Continue assim! 🌟</p>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
