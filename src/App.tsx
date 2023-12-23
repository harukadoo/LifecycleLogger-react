import { useState, useEffect } from 'react';
import './App.css';
import { Console } from './components/Console';
import { Button } from './components/Button';

type Message = string;

function App() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [count, setCount] = useState<number>(0);

  function clickCounter()  {
    setCount(prevCount => prevCount + 1);
  }

  function addToConsole(message: Message) {
    setMessages(prevMessages => [...prevMessages, message]);
  }

  useEffect(() => {
    addToConsole('Did mount');
    return () => {
      addToConsole('Did unmount');
    }

  }, []);

  useEffect(() => {
    addToConsole('Did update');
  }, [count]);

  return (
    <div className='container'>
      <Console messages={messages}/>

      <Button count={count} clickHandler={clickCounter}/>
    </div>
  );
}

export default App;
