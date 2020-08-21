import React, { useState } from 'react';
import { firebaseConfig } from '../firebase';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const handleOnChange = e => {
    const inputValue = e.target.value;
    setInput(inputValue);
  };

  const addTodo = () => {
    setTodos([...todos, input]);
    setInput('');
  };

  return (
    <div className='App'>
      <h1>Todo App</h1>
      <input type='text' value={input} onChange={handleOnChange} />
      <button onClick={addTodo}>Add Todo</button>

      <ul>
        {todos.map(todo => (
          <li>{todo}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
