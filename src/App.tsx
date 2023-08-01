import React, { useState } from 'react';
// import logo from './logo.svg';
import './App.css';
import Greet from './Greet'

function App() {
  const [name, setName] = useState('"Enter Name"')


  return (
    <div className="App">
      <form onSubmit={(e) => {
        e.preventDefault();

      }}>
        <input placeholder='name' onChange={(event) => setName(event.target.value)}></input>

        <button>Enter</button>
      </form>
      <Greet name={name}/>
    </div>
  );
}

export default App;
