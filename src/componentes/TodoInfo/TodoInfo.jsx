import './TodoInfo.css'

const TodoInfo = ({countTodo, removeCompleted}) => {
    return (
        <div className="todo-info todo">
            <p>{countTodo} items left</p>
            <button onClick={removeCompleted}>Clear Completed</button>
        </div>
    )
}

export default TodoInfo;