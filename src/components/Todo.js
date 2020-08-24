import React from 'react';
import { List, ListItem, ListItemText } from '@material-ui/core';

const Todo = ({ todo }) => {
  return (
    <List>
      <ListItem>
        <ListItemText primary='Todo' secondary={todo} />
      </ListItem>
    </List>
  );
};

export default Todo;
