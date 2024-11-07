"use client";

import Chatbot from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css';
import config from './bot/config.js';
import MessageParser from './bot/messageParser.jsx';
import ActionProvider from './bot/ActionProvider.jsx';
import './page.css';

export default function Home() {
  return (
    <div>
      <Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
      />
    </div>
  );
  
};