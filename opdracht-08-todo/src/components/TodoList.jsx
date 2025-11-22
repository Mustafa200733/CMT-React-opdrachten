import React, { useState} from "react";
const TodoList = () => {
    const [tasks, setTasks] =  useState([ ]);
    const [newTask, setNewTask] = useState("");

    function handleInputChange(event){
    setNewTask(event.target.value);
    }

    function addTask(){
        if(newTask.trim() !== "")
setTasks(t => [...t, newTask]);
   setNewTask("");
}



    return (  
<div >

<h1>To-Do-List</h1>
<div>
    <input 
    type="text" 
    placeholder="Schrijf een taak ..."
    value={newTask}
    onChange={handleInputChange} />
    <button  
    onClick={addTask}>
        Toevoegen
    </button>
   
</div>
<ol>
    {tasks.map((task, index)=>
    <li key={index}>
        <span>{task} </span>
    </li>
    )}
</ol>
</div>
    );
}
 
export default TodoList;