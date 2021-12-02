


function Todoitem({ todo, deleteTodo }) {
    const mine = 1
    return(
       
        <li className={mine}>
            <input type='Checkbox' />
            {todo.text}
            {mine && 
                <button class='xButton' onClick={() => deleteTodo(todo)}>
                    x
                </button>
                
            }
        </li>
        
    );
}

export default Todoitem;

