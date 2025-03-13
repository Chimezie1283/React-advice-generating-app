import logo from './logo.svg';
import './App.css';
import { use, useState } from 'react';
import { useEffect } from 'react';

function App() {
    
      const [advice, setAdvice] = useState("");
      const [count, setCount] = useState(0);

      async function fetchAdvice() {
        const res = await fetch("https://api.adviceslip.com/advice");
        const data = await res.json();
        setAdvice(data.slip.advice);
        setCount(count + 1);
      }

      useEffect(() => {
        fetchAdvice();
      }, []);
      return (
        <div className='App'>
          <h1>Get professional advice</h1>
          <button onClick={fetchAdvice}>Get Advice</button>
          <h2>{advice}</h2>
          <p>You have been given <strong>{ count }</strong> advises today, make good us of them </p>
        </div>
        
      );
      
  }
  
     { /* <Counter />
      <Message name="Chimezie"/>
      <Message name="Emmanuel"/>
      <Message name="Agbo"/>
      <Greet name= 'Alice'/>
      <Greet name= 'Chimezie'/>
      <Greet name= 'Ebere'/>
      <Welcome name= 'Ogbija' heroName= 'Vicky'/>
      <Hello />*/}


export default App;
