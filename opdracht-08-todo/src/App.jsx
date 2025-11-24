import { useState } from 'react';
import './App.css'
import CreateToDo from './components/CreateToDo'
import ToDoList from './components/ToDoList'


function App() {
  const [textInput, setTextInput] = useState('');
  const [todo, setTodo] = useState([]);

  return (
  <>
    <h1 className="h1">To-Do-List</h1>
    <CreateToDo textInput={textInput} setTodo={setTodo} setTextInput={setTextInput} todo={todo} />
    <ToDoList todo={todo}/>
   </>
   );
};

export default App
