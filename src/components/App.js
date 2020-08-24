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

  const handleSubmit = e => {
    e.preventDefault();

    if (e.keyCode === 13) {
      addTodo();
    }
  };

  return (
    <div className='App'>
      <h1>Todo App</h1>
      <form onSubmit={handleSubmit}>
        <input type='text' value={input} onChange={handleOnChange} />
        <button onClick={addTodo}>Add Todo</button>
      </form>
      <ul>
        {todos.map((todo, idx) => (
          <li key={idx}>{todo}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
