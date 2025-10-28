import React, { useState } from 'react';

const MapScreen = () => {
  const [filter, setFilter] = useState('all');

  const locations = [
    {
      id: 1,
      icon: '🏥',
      name: 'CAPS - Centro de Atenção Psicossocial',
      details: 'Atendimento gratuito • 2.5 km • Aberto agora',
      type: 'health',
      free: true
    },
    {
      id: 2,
      icon: '🏫',
      name: 'Roda de conversa sobre ansiedade',
      details: '15/10 às 19h • Centro Comunitário • Gratuito',
      type: 'event',
      free: true
    },
    {
      id: 3,
      icon: '🎨',
      name: 'Oficina de arte terapêutica',
      details: 'Sábados 14h • Espaço Cultural • R$ 20',
      type: 'event',
      free: false
    },
    {
      id: 4,
      icon: '🏥',
      name: 'Hospital Psiquiátrico Municipal',
      details: 'Emergência 24h • 5.2 km • SUS',
      type: 'health',
      free: true
    },
    {
      id: 5,
      icon: '💬',
      name: 'Grupo de apoio - Depressão',
      details: 'Quartas 18h • Online • Gratuito',
      type: 'event',
      free: true
    },
    {
      id: 6,
      icon: '🧘',
      name: 'Meditação guiada no parque',
      details: 'Domingos 8h • Parque Central • Gratuito',
      type: 'event',
      free: true
    }
  ];

  const filteredLocations = locations.filter(location => {
    if (filter === 'all') return true;
    if (filter === 'free') return location.free;
    if (filter === 'online') return location.details.includes('Online');
    return location.type === filter;
  });

  const handleLocationClick = (location) => {
    alert(`📍 ${location.name}\n\n${location.details}\n\nEste é um protótipo. Em uma versão completa, aqui seria exibida mais informação e opções de contato.`);
  };

  return (
    <div className="container">
      <div className="header">
        <h1>📍 Encontre apoio perto de você</h1>
        <p>Locais e eventos de apoio psicológico</p>
      </div>
      
      <div className="content">
        <div className="map-container">
          🗺️ Mapa da cidade com ícones
          <br />
          <small>(Em uma versão completa, aqui seria integrado um mapa real)</small>
        </div>
        
        <div className="card">
          <h3>🔍 Filtros</h3>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            <button
              className={`btn ${filter === 'all' ? 'btn-primary' : 'btn-outline'}`}
              onClick={() => setFilter('all')}
              style={{ fontSize: '12px', padding: '8px 12px' }}
            >
              Todos
            </button>
            <button
              className={`btn ${filter === 'free' ? 'btn-primary' : 'btn-outline'}`}
              onClick={() => setFilter('free')}
              style={{ fontSize: '12px', padding: '8px 12px' }}
            >
              Gratuito
            </button>
            <button
              className={`btn ${filter === 'online' ? 'btn-primary' : 'btn-outline'}`}
              onClick={() => setFilter('online')}
              style={{ fontSize: '12px', padding: '8px 12px' }}
            >
              Online
            </button>
            <button
              className={`btn ${filter === 'health' ? 'btn-primary' : 'btn-outline'}`}
              onClick={() => setFilter('health')}
              style={{ fontSize: '12px', padding: '8px 12px' }}
            >
              Saúde
            </button>
            <button
              className={`btn ${filter === 'event' ? 'btn-primary' : 'btn-outline'}`}
              onClick={() => setFilter('event')}
              style={{ fontSize: '12px', padding: '8px 12px' }}
            >
              Eventos
            </button>
          </div>
        </div>
        
        {filteredLocations.map((location) => (
          <div
            key={location.id}
            className="location-item"
            onClick={() => handleLocationClick(location)}
          >
            <span className="location-icon">{location.icon}</span>
            <div className="location-info">
              <div className="location-name">{location.name}</div>
              <div className="location-details">{location.details}</div>
            </div>
          </div>
        ))}
        
        {filteredLocations.length === 0 && (
          <div className="card">
            <p>Nenhum local encontrado com os filtros selecionados.</p>
          </div>
        )}
        
        <div className="card">
          <h3>💡 Dica</h3>
          <p>Muitos locais oferecem atendimento gratuito pelo SUS. Não hesite em buscar ajuda quando precisar.</p>
        </div>
      </div>
    </div>
  );
};

export default MapScreen;
