import React from 'react'

const Todo = ({todo, toggleTodo}) => {

  const handleCheckbox =() => { 
    toggleTodo(todo.id);
   };

  return (
  <div>
    <label>
        <input type="checkbox"
           checked={todo.completed}
           onChange={handleCheckbox}
           readOnly
         />
    </label>
    {todo.name}
  </div>);
}

export default Todo