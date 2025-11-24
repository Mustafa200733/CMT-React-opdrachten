import ToDo from "./ToDo";

const ToDoList = ({todo}) => {
    return ( 
        <>
        {todo.map(( todo) => (
    <ToDo todo={todo}/>
      ))}
      
       </>
     );
}
 
export default ToDoList;

