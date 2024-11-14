import React from 'react';

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const initialAction =() => {
    const message = createChatBotMessage(' eu quero mudar meu endereço')
    updateState(message)
  }  

  const updateState = (message) => {
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
}

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            initialAction,
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;