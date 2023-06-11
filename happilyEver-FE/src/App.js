import './App.css';
import 'react-chatbot-kit/build/main.css'
import Chatbot from "react-chatbot-kit";

import MessageParser from './MessageParser'
import ActionProvider from './ActionProvider'
import config from './config';
import { useDispatch, useSelector } from 'react-redux';
import { second } from './store';

function App() {

  const tab = useSelector((state) =>  state.tabs.value);
  const name = useSelector((state) => state.info.userName)
  const age = useSelector((state) => state.info.userAge)
  const dispatch = useDispatch();

  return (
    <div className="App">
      <header className="App-header">
        {tab === 1 ? (
          <div style={{width: '275px', height: '500px', backgroundColor:'white', borderRadius:'5px', display:'flex', alignItems:'center', justifyContent:'center'}}>
            <div>
              <p style={{color:'black', marginBottom: '10px'}}>Enter into Student Info System</p>
              <button style={{backgroundColor: '#2898ec', border: 'none', color: 'white', padding: '8px 15px', borderRadius: '3px', cursor: 'pointer'}} onClick={() => dispatch(second())}>Enroll Now!</button>
            </div>
          </div>
        ) : (
          tab === 2 ? (
            
            <Chatbot config={config} messageParser={MessageParser} actionProvider={ActionProvider}/>
          ) : (
              <div style={{width: '275px', height: '500px', backgroundColor:'white', borderRadius:'5px', display:'flex', alignItems:'center', justifyContent:'center'}}>
                <div>
                  <p style={{color:'black', fontSize:'15px', padding: '0 25px', lineHeight: '20px'}}>Your name <span style={{fontWeight: 'bold'}}>{name}</span> aged <span style={{fontWeight: 'bold'}}>{age}</span> has been added to student system. You may now exit.</p>
                </div>
              </div>
            )
        )}
      </header>
    </div>
  );
}

export default App;
