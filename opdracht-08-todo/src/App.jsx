import { useState } from 'react';
import CreateToDo from './components/CreateToDo'
import ToDoList from './components/ToDoList'


function App() {
  const [textInput, setTextInput] = useState('');
  const [todo, setTodo] = useState([]);

  return (
    
  <section className='flex flex-col items-center justify-center min-h-screen text-blue-600 font-sans'>
    <h1 className="text-4xl font-bold mb-6 ">Mustafa To-Do-List</h1>
    <CreateToDo textInput={textInput} setTodo={setTodo} setTextInput={setTextInput} todo={todo} />
    <ToDoList todo={todo}/>
   </section>

   
   );
};

export default App
