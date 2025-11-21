import { useState } from 'react'
import { ChatInput } from './components/ChatInput';
import {ChatMessage} from './components/ChatMessage';
import ChatMessages  from './components/ChatMessages';
import './App.css'



function App() {
  const [chatMessages, setChatMessages] = useState([
    { message: 'Hello Chatbot!', sender: 'user', id: 'id1' },
    { message: 'How are you?', sender: 'robot', id: 'id2' },
    { message: 'Tell me a joke!', sender: 'user', id: 'id3' },
    { message: 'Goodbye!', sender: 'robot', id: 'id4' },
  ]);

  return (
    <div className="app-container">
      <ChatMessages chatMessages={chatMessages} />
      <ChatInput
        chatMessages={chatMessages}
        setChatMessages={setChatMessages}
      />
    </div>
  );
}

export default App
