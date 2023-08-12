import { useState } from 'react';
import './NewTodo.css'
import { v4 as uuid } from "uuid";

const NewTodo = ({todosState}) => {
    const [input, setInput] = useState('')
    const [todos, setTodos] = todosState;

    function addTodo(key){
       if(key === 'Enter'){
        const todo = {
            id: uuid(),
            text: input,
            isCompleted: false
        }
          setTodos([todo, ...todos]);
          setInput('')
          document.activeElement.blur();
       }
    }
    return (
        <div className='todo todo-list new-input'>
            <button className='complete'></button>
            <input 
            value={input} 
            onChange={(e)=>setInput(e.target.value)} 
            onKeyDown={(e)=>addTodo(e.key)} 
            placeholder='Create a new todo...' 
            type='text'
            />
        </div>
    )
}

export default NewTodo;