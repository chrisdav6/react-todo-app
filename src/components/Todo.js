import React from 'react';
import { ListItem, ListItemText } from '@material-ui/core';

const Todo = ({ todo }) => {
  return (
    <ListItem className='Todo'>
      <ListItemText primary={todo} secondary='Deadline - tomorrow 6am' />
    </ListItem>
  );
};

export default Todo;
