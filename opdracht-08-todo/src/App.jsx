import { useState } from 'react';
import './App.css'
import CreateToDo from './components/CreateToDo'
import ToDoList from './components/ToDoList'


function App() {
  const [textInput, setTextInput] = useState('');
  const [todo, setTodo] = useState([]);

  return (
  <>
    <CreateToDo textInput={textInput} setTodo={setTodo} setTextInput={setTextInput} todo={todo} />
 <ToDoList todo={todo}/>
   </>
  
  );
};

export default App
