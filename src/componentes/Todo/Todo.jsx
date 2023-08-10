import './Todo.css'
import iconCheckSvg from '../../assets/img/icon-check.svg';



const Todo = ({ todo, removeTodo, completeTodo }) => {


    const backgroundCompleted = `url(${iconCheckSvg}), linear-gradient(to right, hsl(192, 100%, 67%), hsl(280, 87%, 65%))`;

    function completeTodoFunc (id){
        completeTodo(id);
        
    }

    return (
        <div className='todo'>

            <button style={{backgroundImage: todo.isCompleted ? backgroundCompleted : ''}} onClick={() => completeTodoFunc(todo.id)} className='complete'></button>

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