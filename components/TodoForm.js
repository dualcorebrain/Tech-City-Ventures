import React, { useState, useEffect, useRef } from 'react';

function TodoForm(props) {      //Not familiar with 'props', tried best understanding this however I just ended up following the documentation and similar stack overflow questions
  const [input, setInput] = useState(props.edit ? props.edit.value : '');       

  const inputRef = useRef(null);    

  useEffect(() => {
    inputRef.current.focus();       //https://www.geeksforgeeks.org/javascript-focus/ Gives error (remove in morning)
  });

  const changesGiven = e => {               //Event handler
    setInput(e.target.value);
  };

  const SubmitsGiven = e => {
    e.preventDefault();         //

    props.onSubmit({                //event handler
      id: Math.floor(Math.random() * 10000),        //Random Number, was using 'id=id+1' but kept getting errors.
      text: input
    });
    setInput('');       //sets input to blank after completion and removes any previous writings in the text input
  };

  return (
    <form onSubmit={SubmitsGiven} className='todo-form'>
      {props.edit ? (
        <>
          <input placeholder='Update your item' value={input} onChange={changesGiven} name='text' ref={inputRef} className='todo-input edit'/>
          <button onClick={SubmitsGiven} className='todo-button edit'>Update</button>
        </>
      ) : (
        <>
          <input placeholder='Add a todo' value={input} onChange={changesGiven} name='text' className='todo-input' ref={inputRef}/>
          <button onClick={SubmitsGiven} className='todo-button'>
            Add 
          </button>
        </>
      )}
    </form>
  );
}

export default TodoForm;