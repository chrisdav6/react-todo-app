import React, { useState, useEffect } from 'react';
import Todo from './Todo';
import {
  List,
  Button,
  FormControl,
  InputLabel,
  Input
} from '@material-ui/core';
import db from '../firebase';
import firebase from 'firebase';
import { firebaseConfig } from '../firebaseConfig';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  //When app loads, listen to db and fetch new todos as they are added and removed
  useEffect(() => {
    db.collection('todos').onSnapshot(snapshot => {
      setTodos(snapshot.docs.map(doc => doc.data().todo));
    });
  }, []);

  const handleOnChange = e => {
    const inputValue = e.target.value;
    setInput(inputValue);
  };

  //Handles form submit with enter key and adding todo and clearing input
  const addTodo = e => {
    e.preventDefault();
    db.collection('todos').add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    });
    setTodos([...todos, input]);
    setInput('');
  };

  return (
    <div className='App'>
      <h1>Todo App</h1>

      <form>
        <FormControl>
          <InputLabel htmlFor='todo'>Todo</InputLabel>
          <Input
            type='text'
            id='todo'
            value={input}
            onChange={handleOnChange}
          />
        </FormControl>
        <Button
          disabled={!input}
          variant='contained'
          color='primary'
          type='submit'
          onClick={addTodo}
        >
          Add Todo
        </Button>
      </form>

      <List className='TodoList'>
        {todos.map((todo, idx) => (
          <Todo key={idx} todo={todo} />
        ))}
      </List>
    </div>
  );
};

export default App;
