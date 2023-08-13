import { useState, useEffect, useRef} from 'react';
import './TodoForm.css'
import NewTodo from '../NewTodo/NewTodo';
import TodoInfo from '../TodoInfo/TodoInfo';
import TodoFilter from '../TodoFilter/TodoFilter'
import { SortableItem } from '../SortableItems/SortableItems';
import { v4 as uuidv4 } from "uuid";

import {
    DndContext,
    closestCenter

} from '@dnd-kit/core'

import {
    arrayMove,
    SortableContext,
    verticalListSortingStrategy,
} from '@dnd-kit/sortable'

const TodoForm = () => {


    const [filter, setFilter] = useState("All")
    const [todos, setTodos] = useState([]);
    let shouldlog = useRef(true);


    useEffect(() => {
        const storedTodos = JSON.parse(localStorage.getItem('todos'));

        if (shouldlog.current) {
            shouldlog.current = false;
           if (storedTodos) {

            setTodos(storedTodos)
        } 
            }

        
    }, []);


    

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
        console.log('mostrando o state todos após inseridos os dados');
    console.log(todos);
    }, [todos]);


    let countTodo = 0;

    function removeTodo(id) {
        setTodos(todos.filter((todo) => { return todo.id != id }))
    }

    function completeTodo(id) {
        setTodos(todos.map((todo) => {
            if (todo.id === id)
                todo.isCompleted = !todo.isCompleted
            return todo
        }))
    }

    function removeCompleted() {
        setTodos(todos.filter((todo) => !todo.isCompleted))
    }

    function handleDragEnd(event) {
        if (event.delta.x === 0) {
            if (event.active.id === event.over.id) {
                if (event.activatorEvent.target.className === 'complete' || event.activatorEvent.target.nodeName === 'P') {
                    completeTodo(event.active.id)
                }

                if (event.activatorEvent.target.className === 'remove') {
                    removeTodo(event.active.id)
                }
            }
        }

        const { active, over } = event;
        if (active.id !== over.id) {
            setTodos((items) => {
                const activeIndex = todos.findIndex(todo => todo.id === active.id);
                const overIndex = todos.findIndex(todo => todo.id === over.id);
                return arrayMove(items, activeIndex, overIndex)
            })
        }
    }

    return (
        <div className='todo-form'>
            <h1>TODO</h1>
            <NewTodo todosState={[todos, setTodos]} />
            <div className='todo-list'>
                <DndContext
                    collisionDetection={closestCenter}

                    onDragEnd={handleDragEnd}
                // sensors={sensors}
                >
                    <SortableContext
                        items={todos}
                        strategy={verticalListSortingStrategy}
                    >
                        {todos.filter((todo) => filter === 'All' ? true : filter === 'Active' ? !todo.isCompleted : todo.isCompleted)
                            .map((todo) => {
                                todo.isCompleted ? '' : countTodo++;
                                return <SortableItem filter={filter} todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} key={todo.id} id={todo.id} todo={todo} />
                            })}
                    </SortableContext>
                </DndContext></div>

            <TodoInfo countTodo={countTodo} removeCompleted={removeCompleted} />
            <TodoFilter setFilter={setFilter} />
        </div>
    )
}

export default TodoForm;


// {
        //     id: uuidv4(),
        //     text: 'Estudar Dor Pélvica Crônica',
        //     isCompleted: false
        // },
        // {
        //     id: uuidv4(),
        //     text: 'Revisar Incontinência Urinária e Disfunções Pélvicas',
        //     isCompleted: false
        // },
        // {
        //     id: uuidv4(),
        //     text: 'Assistir 2 aulas do curso Gestão da Dor no Câncer Ginecológico',
        //     isCompleted: false
        // },
        // {
        //     id: uuidv4(),
        //     text: 'Revisar Neuromodulação',
        //     isCompleted: false
        // },
        // {
        //     id: uuidv4(),
        //     text: 'Flashcard sobre Biofeedback e Eletromiografia',
        //     isCompleted: false
        // },
        // {
        //     id: uuidv4(),
        //     text: 'Flashcard sobre Fibromialgia',
        //     isCompleted: false
        // }