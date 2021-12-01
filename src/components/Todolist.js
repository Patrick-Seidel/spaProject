import Todoitem from './Todoitem'
import Create from './Create';
import { useState } from 'react';

const defaultTodos = [
    { id: 58477,  text: "Wash dishes"},
    { id: 64851,  text: "Bake a cake" },
    { id: 59858,  text: "Make a website" },
];

function Todolist({ user }) {
    const [todos, setTodos] = useState(defaultTodos);

    function deleteTodo(todo) {
        const newTodos = todos.filter(f => f.id !== todo.id);
        setTodos(newTodos);
    }

    function createTodo(todo) {
        const newTodos = [...todos];
        newTodos.push(todo);
        setTodos(newTodos);
    }

    console.log(todos);

    return (
        <div className="todos">
            <Create user={user} createTodo={createTodo}  />
            <ul>
                {todos.map(todo =>
                    <Todoitem
                        user={user}
                        key={todo.id}
                        todo={todo}
                        deleteTodo={deleteTodo}
                    />
                )}
            </ul>
        </div>
    );
}

export default Todolist;



