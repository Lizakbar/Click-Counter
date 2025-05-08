import React, { useState, useEffect } from 'react';
import logo from './logo.svg';

function AppWelcomeMessage(props) {
  return (<h1>Welcome, {props.name}!</h1>);
  }
function App(){
  const [count, setCount] = useState(0);
  const incrementCount = () => {
    setCount(count + 1);
  };
  const resetCount = () => {
    setCount(0);
  };
function isPrime(num) {
  if (num <= 1) {
    return false;
  }
  if (num === 2) {
    return true;
  }
  if (num % 2 === 0){
    return false;
  }
  for (let i = 3; i< Math.sqrt(num); i += 2) {
    if (num % i === 0){
      return false;
    }
  }

  return true;
}
useEffect(() => {
  if (isPrime(count)) {
    alert('¡Es un número primo!');
  }
}, [count]);

return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <AppWelcomeMessage name="React Developer" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={incrementCount}>
          Click to increment: {count}
        </button>
        <button onClick={resetCount}>
          Restart
        </button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
