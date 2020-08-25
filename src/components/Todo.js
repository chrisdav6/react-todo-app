import React, { useState } from 'react';
import { Button, ListItem, ListItemText, Modal } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { makeStyles } from '@material-ui/core/styles';
import db from '../firebase';

const useStyles = makeStyles(theme => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
  }
}));

const Todo = ({ todo }) => {
  const classes = useStyles();

  const [open, setOpen] = useState(false);
  const [edit, setEdit] = useState(todo.todo);

  const handleDelete = e => {
    db.collection('todos').doc(todo.id).delete();
  };

  const handleChange = e => {
    const editValue = e.target.value;
    setEdit(editValue);
  };

  const updateTodo = e => {
    e.preventDefault();
    db.collection('todos').doc(todo.id).set(
      {
        todo: edit
      },
      { merge: true }
    );
    setOpen(false);
  };

  return (
    <>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <div className={classes.paper}>
          <h1>Edit Todo</h1>
          <form className='Todo__modal__form'>
            <input
              type='text'
              value={edit}
              onChange={handleChange}
              className='Todo__modal__input'
            />
            <Button variant='contained' color='primary' onClick={updateTodo}>
              Edit
            </Button>
          </form>
        </div>
      </Modal>
      <ListItem className='Todo'>
        <ListItemText primary={todo.todo} secondary='Deadline - tomorrow 6am' />
        <Button
          style={{ marginRight: '1em' }}
          variant='contained'
          color='primary'
          onClick={() => setOpen(true)}
        >
          <EditIcon style={{ marginRight: '.25em' }} /> Edit
        </Button>
        <Button variant='contained' color='secondary' onClick={handleDelete}>
          <DeleteIcon style={{ marginRight: '.25em' }} /> Delete
        </Button>
      </ListItem>
    </>
  );
};

export default Todo;
