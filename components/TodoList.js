import React, { useState } from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';

function TodoList() {
  const [todos, setTodos] = useState([]);       //Used react-hooks, learnt from YouTube playlist given on Github

  const addTodo = todo => {         
    if (!todo.text || /^\s*$/.test(todo.text)) {        //Regular expression. Not competely sure how this works, taken from StackOverflow and MDN
      return;                                           //Used to prevent blanks
    }

    const newTodos = [todo, ...todos];

    setTodos(newTodos);
    console.log(...todos);
  };

  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {        //Prevent blank input
      return;
    }

    setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item))); //React's Lists and Keys official website tutorial 
  };

  const removeTodo = id => {
    const removedArr = [...todos].filter(todo => todo.id !== id);       //https://stackoverflow.com/questions/43643877/filtering-a-list-with-react

    setTodos(removedArr);
  };

  const completeTodo = id => {                  
    let updatedTodos = todos.map(todo => {      
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;     
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <>
      <h1>List</h1>
      <TodoForm onSubmit={addTodo} />
      <Todo
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
      />
    </>
  );
}

export default TodoList;