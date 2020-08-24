import React from 'react';
import { Button, ListItem, ListItemText } from '@material-ui/core';
import db from '../firebase';

const Todo = ({ todo }) => {
  const handleDelete = e => {
    db.collection('todos').doc(todo.id).delete();
  };

  return (
    <ListItem className='Todo'>
      <ListItemText primary={todo.todo} secondary='Deadline - tomorrow 6am' />
      <Button onClick={handleDelete}>Delete</Button>
    </ListItem>
  );
};

export default Todo;
