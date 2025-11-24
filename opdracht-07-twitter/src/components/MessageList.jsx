import Message from "./Message";

const MessageList = ({name, message}) => {
    return ( 
        <>
          {message.map(( message) => (
    <Message name={name} message={message}/>
    


          ))}
       </>
     );
}
 
export default MessageList;