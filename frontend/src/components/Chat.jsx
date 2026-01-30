import { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';

function Chat() {
  const [selectedChat, setSelectedChat] = useState(0);
  const [message, setMessage] = useState('');

  const conversations = [
    {
      id: 1,
      name: 'Jackson Alimanong',
      product: 'Carrots',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
      preview: 'Lorem ipsum dolor sit amet...',
      active: true,
    },
  ];

  const messages = [
    {
      id: 1,
      sender: 'them',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      id: 2,
      sender: 'me',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      id: 3,
      sender: 'them',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      id: 4,
      sender: 'me',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
  ];

  const handleSendMessage = () => {
    if (message.trim()) {
      // Handle sending message
      setMessage('');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <nav className="bg-primary text-white px-6 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src="./Logo.svg" alt="MarketRoots" className="h-8" />
          </div>
          <ul className="flex items-center gap-8">
            <li><Link to="/" className="hover:text-secondary transition">Home</Link></li>
            <li><a href="#" className="hover:text-secondary transition">Marketplace</a></li>
            <li><a href="#" className="text-secondary font-semibold">Chat</a></li>
          </ul>
          <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-secondary">
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </nav>

      {/* Chat Container */}
      <div className="max-w-7xl mx-auto p-6">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden flex" style={{ height: 'calc(100vh - 250px)' }}>
          {/* Sidebar - Inbox */}
          <div className="w-72 border-r border-gray-200 flex flex-col">
            <div className="p-4 border-b border-gray-200">
              <h2 className="font-heading font-bold text-2xl text-gray-900 mb-4">Inbox</h2>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search"
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full text-sm focus:outline-none focus:border-primary"
                />
                <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>

            {/* Conversation List */}
            <div className="flex-1 overflow-y-auto">
              {conversations.map((conv, index) => (
                <div
                  key={conv.id}
                  onClick={() => setSelectedChat(index)}
                  className={`p-4 flex items-start gap-3 cursor-pointer hover:bg-gray-50 transition ${
                    selectedChat === index ? 'bg-primary/10 border-l-4 border-primary' : ''
                  }`}
                >
                  <img
                    src={conv.avatar}
                    alt={conv.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-gray-900 text-sm">{conv.name}</h4>
                    <p className="text-xs text-primary font-medium">Product: {conv.product}</p>
                    <p className="text-xs text-gray-500 truncate">{conv.preview}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Main Chat Area */}
          <div className="flex-1 flex flex-col">
            {/* Chat Header */}
            <div className="p-4 border-b border-gray-200 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <img
                  src={conversations[selectedChat].avatar}
                  alt={conversations[selectedChat].name}
                  className="w-14 h-14 rounded-full object-cover"
                />
                <span className="font-semibold text-gray-900">{conversations[selectedChat].name}</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-3">
                  <img
                    src="https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=100&h=100&fit=crop"
                    alt="Product"
                    className="w-10 h-10 rounded-lg object-cover"
                  />
                  <span className="text-gray-700">Product: Carrots</span>
                </div>
                <button className="p-2 hover:bg-gray-100 rounded-full">
                  <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 24 24">
                    <circle cx="12" cy="6" r="2" />
                    <circle cx="12" cy="12" r="2" />
                    <circle cx="12" cy="18" r="2" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-gray-50">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.sender === 'me' ? 'justify-start' : 'justify-end'}`}
                >
                  <div
                    className={`max-w-md px-4 py-3 rounded-2xl text-sm ${
                      msg.sender === 'me'
                        ? 'bg-gray-200 text-gray-800'
                        : 'bg-primary text-white'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>

            {/* Message Input */}
            <div className="p-4 border-t border-gray-200 bg-[#5a7c5a]">
              <div className="flex items-center gap-3">
                <button className="p-2 text-white hover:bg-white/10 rounded-full transition">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                  </svg>
                </button>
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Type your message here..."
                  className="flex-1 px-4 py-3 rounded-full bg-white/90 text-gray-800 placeholder-gray-500 focus:outline-none"
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                />
                <button
                  onClick={handleSendMessage}
                  className="p-3 bg-secondary hover:bg-secondary/90 text-white rounded-full transition"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Chat;
