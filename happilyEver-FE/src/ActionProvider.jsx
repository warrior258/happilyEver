import React from 'react';
import { createClientMessage } from 'react-chatbot-kit';
import { useDispatch } from 'react-redux';
import { getAge, getName, third } from './store';

const ActionProvider = ({ createChatBotMessage, setState, children }) => {

  
  const dispatch = useDispatch();

    
  const handleGotIt = () => {
    // const botMessage = createChatBotMessage('Enter your Name');

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, createClientMessage('got it')],
    }));

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, createChatBotMessage('Enter your Name')],
    }));
  };

  const handleName = (message) => {
    
    dispatch(getName(message))

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, createChatBotMessage('Enter your age',{widget:'option'})],
    }));
  };

  const handleAge = (age) => {
    
    dispatch(getAge(age))

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, createClientMessage(age)],
    }));

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, createChatBotMessage(`Thank you. In 5 seconds, bot will exit`)],
    }));

    setTimeout(() => {
      dispatch(third());
    },5000)

  };


  

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            handleGotIt,
            handleName,
            handleAge
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;