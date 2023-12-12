import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react'


const App = () => {
  const [names, setNames] = useState(['Ali', 'hasan' ]);
  const [inputValue, setInputValue] = useState('');

  const findName = () => {
    const randomIndex = Math.floor(Math.random() * names.length);
    alert(names[randomIndex]);
  };

  const addList = () => {
    setNames([...names, inputValue]);
    setInputValue('');
  };
  return (
    
    <div>
      <button onClick={findName}>random name</button>
      <br />
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={addList}>add name</button>
    </div>
  );
};
export default App;