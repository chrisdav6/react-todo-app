import React, { useState } from 'react';
import { firebaseConfig } from '../firebase';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const handleOnChange = e => {
    const inputValue = e.target.value;
    setInput(inputValue);
  };

  const handleSubmit = () => {
    setTodos(prev => {
      return [...prev, input];
    });
    setInput('');
  };

  return (
    <div className='App'>
      <h1>Todo App</h1>
      <input type='text' value={input} onChange={handleOnChange} />
      <button onClick={handleSubmit}>Submit</button>

      {todos.map(todo => (
        <p>{todo}</p>
      ))}
    </div>
  );
};

export default App;
