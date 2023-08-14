import './Todo.css'
import iconCheckSvg from '../../assets/img/icon-check.svg';
import { FiEdit2 } from 'react-icons/fi';
import { useState } from 'react';
import {BsCheck2} from 'react-icons/bs'
import {GrFormClose} from 'react-icons/gr'
import {IoMdClose} from 'react-icons/io'

export const Todo = ({ todo, removeTodo, completeTodo }) => {


    const backgroundCompleted = `url(${iconCheckSvg}), linear-gradient(to right, hsl(192, 100%, 67%), hsl(280, 87%, 65%))`;

    return (
        <div className='todo'>

            <button style={{ backgroundImage: todo.isCompleted ? backgroundCompleted : '', }} onClick={() => completeTodo(todo.id)} className='complete'></button>

            <p
                style={
                    {
                        textDecoration: todo.isCompleted ? 'line-through' : '',
                        color: todo.isCompleted ? 'hsl(234, 11%, 52%)' : ''
                    }}>
                {todo.text}
            </p>
            <div className='todo-edit__icon'><FiEdit2/></div>
            <button onClick={() => removeTodo(todo.id)} className='remove'></button>

        </div>
    )
}

export const TodoEdit = ({ modalActiveState, todosState, todo }) => {

    const [modalActive, setModalActive] = modalActiveState;
    const [todos, setTodos] = todosState;
    const [input, setInput] = useState(todo.text)

    function addTodoEdited() {

        const updatedTodos = todos.map((item) => {
            if (item.id === todo.id) {
                return { ...item, text: input };
            }
            return item;
        })

        setTodos(updatedTodos);
        setModalActive(false);
    }

    return (
        <div className='todo-edit todo-list new-input'>
            <input value={input} onChange={(e) => setInput(e.target.value)} />
            <div className='todo-edit__button todo-edit__icon'>
                <IoMdClose onClick={() => setModalActive(false)} size={30}/>
                <BsCheck2  onClick={() => addTodoEdited()} size={30}/>
            </div>
        </div>
    )
}