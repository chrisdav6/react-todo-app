import React from 'react';
import { Button, ListItem, ListItemText } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import db from '../firebase';

const Todo = ({ todo }) => {
  const handleDelete = e => {
    db.collection('todos').doc(todo.id).delete();
  };

  return (
    <ListItem className='Todo'>
      <ListItemText primary={todo.todo} secondary='Deadline - tomorrow 6am' />
      <Button variant='contained' color='secondary' onClick={handleDelete}>
        <DeleteIcon /> Delete
      </Button>
    </ListItem>
  );
};

export default Todo;
