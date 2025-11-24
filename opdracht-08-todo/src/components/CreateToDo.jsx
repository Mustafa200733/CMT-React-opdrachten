import { useState } from "react";

const CreateToDo = ({textInput, setTodo, setTextInput, todo}) => {


   const userInputHandler = (e) => {
    setTextInput(e.target.value)
   };

const submitTodoHandler = (e) => {
  e.preventDefault();

  setTodo([...todo, textInput])
  setTextInput('');
};

return (  
  <form action="">
  <textarea value={textInput} cols="50" rows="1" onChange={userInputHandler}></textarea>
  <button onClick={submitTodoHandler}>Toevoegen</button>
  </form>
        
    );
};
 
export default CreateToDo;