import { createChatBotMessage } from 'react-chatbot-kit';
import StartBtn from './StartBtn';

const config = {
  initialMessages: [createChatBotMessage(`olá eu sou a Ana e seja bem vindo ao nosso chat de atendimento ao cliente! Qual a sua duvida?`, {
      widget: "StartBtn"
    })],
    botName: "assistente Ana",
    widgets: [
      {
        widgetName: "StartBtn",
        wiogetFunc: (props) => <StartBtn {...props}/>,
      },
     ]
};

export default config;