import './Todo.css'

const Todo = ({ todo, removeTodo, completeTodo }) => {

    const backgroundCompleted = 'url(/src/assets/img/icon-check.svg), linear-gradient(to right, hsl(192, 100%, 67%), hsl(280, 87%, 65%))';

    return (
        <div className='todo'>

            <button style={{backgroundImage: todo.isCompleted ? backgroundCompleted : " "}} onClick={() => completeTodo(todo.id)} className='complete'></button>

            <p
            style={
                {textDecoration: todo.isCompleted ? 'line-through' : '', 
                color: todo.isCompleted ? 'hsl(234, 11%, 52%)' : ''}}>
            {todo.text}
            </p>
            <button onClick={() => removeTodo(todo.id)} className='remove'></button>

        </div>

    )
}

export default Todo;