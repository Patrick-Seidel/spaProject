import { useState } from 'react';
import CreateTodo from './Create';
import user from './Todolist'
import createTodo from './Todolist'
// props = {text: String, onButton: Function}
const Todoinput = () => {
    return (
    <div>
     <CreateTodo user={user} createTodo={createTodo}  />
    </div>
    );
  };
  export default Todoinput;