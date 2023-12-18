import io from 'socket.io-client';
import { useEffect } from 'react';

const socket = io.connect("https://agreed-bobolink-fraolcode.koyeb.app/:3001");


function App() {

  const sendmessage = () =>{
    socket.emit("send_message", {message : "hello"} )
  };
 
  useEffect(() => {
    socket.on("received_message",(message)=> {
      alert(message.message);
    });
  }, [socket]);



  return (
    <div className="App">
      <input type="text" placeholder="message" id="message" name="message" ></input>
      <button onClick={sendmessage} type="button"> Send message </button>
    </div>
  );
}

export default App;
