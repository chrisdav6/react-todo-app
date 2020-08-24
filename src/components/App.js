import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import { firebaseConfig } from '../firebase';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const handleOnChange = e => {
    const inputValue = e.target.value;
    setInput(inputValue);
  };

  //Handles form submit with enter key and adding todo and clearing input
  const addTodo = e => {
    e.preventDefault();

    if (input) {
      setTodos([...todos, input]);
      setInput('');
    }
  };

  return (
    <div className='App'>
      <h1>Todo App</h1>
      <form>
        <input type='text' value={input} onChange={handleOnChange} />
        <Button
          variant='contained'
          color='primary'
          type='submit'
          onClick={addTodo}
        >
          Add Todo
        </Button>
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
