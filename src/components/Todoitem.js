function Todoitem({ todo, deleteTodo }) {
    const mine = 1
    return(
        <li className={mine }>
            {todo.text}
            {mine && 
                <button onClick={() => deleteTodo(todo)}>
                    delete
                </button>
                
            }
        </li>
        
    );
}

export default Todoitem;