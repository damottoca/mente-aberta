import React, { useState } from 'react';

const ChatScreen = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Oi, tudo bem? Como você está se sentindo hoje?",
      sender: "volunteer",
      senderName: "Maria (voluntária)"
    },
    {
      id: 2,
      text: "Estou um pouco ansioso...",
      sender: "user"
    }
  ]);
  
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (newMessage.trim()) {
      const message = {
        id: messages.length + 1,
        text: newMessage,
        sender: "user"
      };
      setMessages([...messages, message]);
      setNewMessage('');
      
      // Simular resposta automática do voluntário
      setTimeout(() => {
        const responses = [
          "Entendo como você se sente. Pode me contar mais sobre isso?",
          "É normal se sentir assim. Você já tentou alguma técnica de relaxamento?",
          "Estou aqui para te ouvir. O que está te deixando ansioso?",
          "Respire fundo. Vamos conversar sobre isso juntos."
        ];
        const randomResponse = responses[Math.floor(Math.random() * responses.length)];
        const volunteerMessage = {
          id: messages.length + 2,
          text: randomResponse,
          sender: "volunteer",
          senderName: "Maria (voluntária)"
        };
        setMessages(prev => [...prev, volunteerMessage]);
      }, 2000);
    }
  };

  const handleEmergency = () => {
    alert('🚨 Conectando com emergência...\n\nCVV - Centro de Valorização da Vida\n📞 188 (ligação gratuita)\n💬 Chat: www.cvv.org.br');
  };

  return (
    <div className="container">
      <div className="header">
        <h1>💬 Chat de Apoio Emocional</h1>
        <p>Espaço seguro para conversar</p>
      </div>
      
      <div className="chat-container">
        <div className="chat-messages">
          {messages.map((message) => (
            <div key={message.id} className={`message ${message.sender}`}>
              <div className="message-bubble">
                {message.senderName && (
                  <div style={{ fontSize: '12px', opacity: 0.7, marginBottom: '5px' }}>
                    {message.senderName}
                  </div>
                )}
                {message.text}
              </div>
            </div>
          ))}
        </div>
        
        <form className="chat-input" onSubmit={handleSendMessage}>
          <input
            type="text"
            placeholder="Digite sua mensagem..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
          />
          <button type="submit">📤</button>
        </form>
      </div>
      
      <button className="emergency-btn" onClick={handleEmergency}>
        🚨 Preciso de ajuda agora
      </button>
    </div>
  );
};

export default ChatScreen;
