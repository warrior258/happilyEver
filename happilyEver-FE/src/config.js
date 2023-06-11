import { createChatBotMessage } from 'react-chatbot-kit';
import Button from './components/Button';
import Option from './components/Option';


const config = {
    initialMessages: [createChatBotMessage(`Hello, Welcome to student info system!`,{
      widget: 'button'
    })],
    widgets: [
      {
        widgetName: 'button',
        widgetFunc: (props) => <Button {...props} />,
      },
      {
        widgetName: 'option',
        widgetFunc: (props) => <Option {...props} />,
      },
    ]
};

export default config;