import { useState } from 'react';
import './TodoFilter.css'


const TodoFilter = ({setFilter}) => {

    const [activeFilter, setActiveFilter] = useState('');

    const handleFilterClick = (filter) => {
        
        setActiveFilter(filter);
        setFilter(filter);
        console.log(activeFilter)
    };
    return(
        <div className="todo-filter todo-list todo">
            <button className={activeFilter === 'All' ? 'active' : ''} onClick={()=>handleFilterClick("All")}>All</button>
            <button className={activeFilter === 'Active' ? 'active' : ''} onClick={()=>handleFilterClick("Active")}>Active</button>
            <button className={activeFilter === 'Completed' ? 'active' : ''} onClick={()=>handleFilterClick("Completed")}>Completed</button>
        </div>
    )
}

export default TodoFilter