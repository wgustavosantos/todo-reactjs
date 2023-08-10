import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './TodoForm.css'
import Todo from '../Todo/Todo';
import NewTodo from '../NewTodo/NewTodo';
import TodoInfo from '../TodoInfo/TodoInfo';
import TodoFilter from '../TodoFilter/TodoFilter'

const TodoForm = () => {

    const [todos, setTodos] = useState([
        {
            id: uuidv4(),
            text: 'Estudar Dor Pélvica Crônica',
            isCompleted: false
        },
        {
            id: uuidv4(),
            text: 'Revisar Incontinência Urinária e Disfunções Pélvicas',
            isCompleted: false
        },
        {
            id: uuidv4(),
            text: 'assistir 2 aulas do curso Gestão da Dor no Câncer Ginecológico',
            isCompleted: false
        },
        {
            id: uuidv4(),
            text: 'revisar Neuromodulação',
            isCompleted: false
        },
        {
            id: uuidv4(),
            text: 'flashcard sobre Biofeedback e Eletromiografia',
            isCompleted: false
        },
        {
            id: uuidv4(),
            text: 'flashcard sobre Fibromialgia',
            isCompleted: false
        }
    ])

    const [filter, setFilter] = useState("All")

    let countTodo = 0;

    function removeTodo (id) {
        setTodos(todos.filter ((todo) => {return todo.id != id}))
    }

    function completeTodo (id) {
        setTodos(todos.map((todo)=> {
            if(todo.id === id)
                todo.isCompleted = !todo.isCompleted
            return todo
        }))
    }

    function removeCompleted(){
        setTodos(todos.filter((todo)=> !todo.isCompleted))
    }

    return (
        <div className='todo-form'>
            <h1>TODO</h1>
            <NewTodo todosState={[todos, setTodos]}/>
            <div className='todo-list'>
                {todos
                .filter((todo)=> filter === 'All' ? true : filter === 'Active' ? !todo.isCompleted : todo.isCompleted)
                .map((todo, index) => {
                    todo.isCompleted ? '' : countTodo++;

                    return <Todo 
                    key={index} 
                    completeTodo={completeTodo} 
                    removeTodo={removeTodo} 
                    todo={todo} />
                })}
            </div>
            <TodoInfo countTodo={countTodo} removeCompleted={removeCompleted}/>
            <TodoFilter setFilter={setFilter}/>
        </div>
    )
}

export default TodoForm;