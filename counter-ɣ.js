import React, { useState, useEffect } from 'react';
import logo from './logo.svg';

function AppWelcomeMessage(props) {
  return (<h1>Welcome, {props.name}!</h1>);
  }
function App(){
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("¡Es un número primo!")

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
  if (num % 2 === 0) {
    return false;
  }
   for (let i = 3; i <= Math.sqrt(num); i += 2) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
 }
  
function isPerfectSquare(num){
if (Math.sqrt(num) % 1 === 0){
  return true;
}
return false;
}
function isPerfect(num){
  let sum = 0;
  for (let i = 1; i < num; i++) {
    if (num % i === 0) {
      sum += i;
    }
  }
  return sum === num;
}
function isAbundant(num){
  let sum = 0;
  for (let i = 1; i < num; i++){
    if (num % i === 0) {
      sum += i;
    }
  }
  return sum > num;
}
function isDeficient(num){
  let sum = 0;
  for (let i = 1; i < num; i++){
    if (num % i === 0){       
      sum += i;
      }
    }
  return sum < num;
}
function isFibonacci(num){
  return isPerfectSquare(5 * num * num + 4) || isPerfectSquare(5 * num * num - 4);
}
useEffect(() => {
  const messages = [];
  if (isPrime(count)) {
    messages.push('¡Es un número primo!');
  } if (isPerfectSquare(count)) {
    messages.push('¡Es un cuadrado perfecto!')  
  } if (isPerfect(count)){
    messages.push('¡Es un número perfecto!')
  } if (isAbundant(count)){
    messages.push('¡Es un número abundante!')
  } if (isDeficient(count)){
    messages.push('¡Es un número deficiente!')
  } if (isFibonacci(count)) {
    messages.push('¿Te suena haber oído hablar de un tal Fibonacci?')
  }
    setMessage(messages.length > 0 ? messages.join('\n') : '¡Sigue pulsando!');  
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
        <p>{message}</p>
        <p style={{ fontSize: '0.9em', color: '#ccc' }}>
  Este contador analiza si el número es primo, cuadrado perfecto, perfecto, abundante, deficiente o parte de la serie de Fibonacci.
</p>
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
