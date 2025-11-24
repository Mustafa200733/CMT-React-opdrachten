import { useState } from 'react';
import './App.css'
import CreateMessage from './components/CreateMessage'
import MessageList from './components/MessageList'

function App() {
  const [textInput, setTextInput] = useState('');
  const [message, setMessage] = useState([]);

let name = "Mustafa";
  return (
  <>
    <CreateMessage textInput={textInput} setMessage={setMessage} setTextInput={setTextInput} message={message} />
 <MessageList name={name} message={message}/>
   </>
  
  );
};

export default App
