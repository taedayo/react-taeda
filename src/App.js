import './App.css';
import { useState, useRef } from 'react';
import TodoList from './TodoList';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [todos, setTodos] =useState([]);

  const todoNameRef = useRef();
  const addTask = () => { 
    const name = todoNameRef.current.value;
    setTodos((prevTodos) => { 
      return [...prevTodos, {id:uuidv4(), name:name,completed:false}]
     });

     todoNameRef.current.value = null;
  };

  const toggleTodo = (id) => { 
    const newTodos = [...todos];
    const todo = newTodos.find((a) => a.id === id);
    todo.completed = !todo.completed;
    setTodos(newTodos);
   }
   const delTask =() => { 
    const newTodos = todos.filter((f) => !f.completed);
    setTodos(newTodos);
   }

  return <>
    <TodoList todos={todos} toggleTodo={toggleTodo}/>
    <input type='text' ref={todoNameRef}/>
    <button onClick={addTask}>タスクを追加</button>
    <button onClick={delTask}>完了したタスクを削除</button>
    <div>残りのタスク：{todos.filter((f) => !f.completed ).length}</div>
  </>;
}

export default App;
