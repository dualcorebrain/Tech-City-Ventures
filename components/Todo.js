import React, { useState } from 'react';
import TodoForm from './TodoForm';
import { RiCloseCircleLine } from 'react-icons/ri'; //Gives me error when using react-icons from github
import { ImPencil } from "react-icons/im";      

const Todo = ({ todos, completeTodo, removeTodo, updateTodo }) => {
  const [edit, setEdit] = useState({
    id: null,
    value: ''
  });

  const submitUpdate = value => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,     //Editing doesnt result in new ID, but program gives uncaught exception error
      value: ''
    });
  };

  if (edit.id) {        
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }

  return todos.map((todo, index) => (
    <div
      className={todo.isComplete ? 'todo-row complete' : 'todo-row'}    
      key={index}
    >
      <div key={todo.id} onClick={() => completeTodo(todo.id)}>
        {todo.text}
      </div>
      <div className='icons'>
        <RiCloseCircleLine                      //From react-icons
          onClick={() => removeTodo(todo.id)}   //On click go to this function
          className='delete-icon'
        />
        <ImPencil
          onClick={() => setEdit({ id: todo.id, value: todo.text })}    //On click go to this function
          className='edit-icon'
        />
      </div>
    </div>
  ));
};

export default Todo;