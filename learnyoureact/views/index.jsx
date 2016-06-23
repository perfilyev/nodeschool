import React from 'react';
export default function TodoBox() {
  return (
    <div className="todoBox">
      <h1>Todos</h1>
      <TodoList />
      <TodoForm />
    </div>);
}


function TodoList() {
  return (<div className="todoList">I am a TodoList.</div>);
}

function TodoForm() {
  return (<div className="todoForm">I am a TodoForm.</div>);
}
