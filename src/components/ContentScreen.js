import React, { useState } from 'react';

const ContentScreen = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const articles = [
    {
      id: 1,
      icon: '🧠',
      title: '5 formas de lidar com a ansiedade',
      category: 'Ansiedade'
    },
    {
      id: 2,
      icon: '🌙',
      title: 'Técnicas de relaxamento para dormir',
      category: 'Sono'
    },
    {
      id: 3,
      icon: '💪',
      title: 'Como ajudar um amigo em crise',
      category: 'Apoio'
    },
    {
      id: 4,
      icon: '🧘',
      title: 'Mindfulness para iniciantes',
      category: 'Meditação'
    },
    {
      id: 5,
      icon: '💚',
      title: 'Autocuidado em tempos difíceis',
      category: 'Bem-estar'
    },
    {
      id: 6,
      icon: '🤝',
      title: 'Construindo relacionamentos saudáveis',
      category: 'Relacionamentos'
    }
  ];

  const filteredArticles = articles.filter(article =>
    article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    article.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleArticleClick = (article) => {
    alert(`📖 Abrindo: "${article.title}"\n\nEste é um protótipo. Em uma versão completa, aqui seria exibido o conteúdo completo do artigo.`);
  };

  return (
    <div className="container">
      <div className="header">
        <h1>📘 Dicas e Leituras</h1>
        <p>Educação emocional e autocuidado</p>
      </div>
      
      <div className="content">
        <div className="search-container">
          <input
            type="text"
            className="input"
            placeholder="🔍 Pesquisar tema..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        <div className="card">
          <h3>📚 Artigos em Destaque</h3>
          <p>Conteúdos selecionados para seu bem-estar emocional</p>
        </div>
        
        {filteredArticles.map((article) => (
          <div
            key={article.id}
            className="article-item"
            onClick={() => handleArticleClick(article)}
          >
            <span className="article-icon">{article.icon}</span>
            <div className="article-content">
              <div className="article-title">{article.title}</div>
              <div style={{ fontSize: '12px', color: '#666' }}>
                {article.category}
              </div>
            </div>
            <span className="article-arrow">▶️</span>
          </div>
        ))}
        
        {filteredArticles.length === 0 && (
          <div className="card">
            <p>Nenhum artigo encontrado para "{searchTerm}". Tente outro termo de busca.</p>
          </div>
        )}
        
        <div className="card">
          <h3>💡 Dica</h3>
          <p>Leia um artigo por dia para desenvolver suas habilidades de autocuidado e bem-estar emocional.</p>
        </div>
      </div>
    </div>
  );
};

export default ContentScreen;
