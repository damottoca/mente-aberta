import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const BottomNavigation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    {
      path: '/home',
      icon: '🏠',
      label: 'Início'
    },
    {
      path: '/chat',
      icon: '💬',
      label: 'Conversar'
    },
    {
      path: '/content',
      icon: '📖',
      label: 'Conteúdo'
    },
    {
      path: '/map',
      icon: '📍',
      label: 'Mapa'
    },
    {
      path: '/profile',
      icon: '👤',
      label: 'Perfil'
    }
  ];

  const handleNavClick = (path) => {
    navigate(path);
  };

  return (
    <div className="navbar">
      {navItems.map((item) => (
        <button
          key={item.path}
          className={`nav-item ${location.pathname === item.path ? 'active' : ''}`}
          onClick={() => handleNavClick(item.path)}
        >
          <span className="nav-icon">{item.icon}</span>
          <span>{item.label}</span>
        </button>
      ))}
    </div>
  );
};

export default BottomNavigation;
