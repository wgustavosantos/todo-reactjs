import { useSortable } from "@dnd-kit/sortable";
import { CSS } from '@dnd-kit/utilities';
import Todo from "../Todo/Todo";

export function SortableItem({ id, todo, index, completeTodo, removeTodo, todos, filter }) {

    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition
    } = useSortable({ id: id })

    const style = {
        transform: CSS.Transform.toString(transform),
        transition
    }

    return (
        <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
            <Todo
                key={index}
                completeTodo={completeTodo}
                removeTodo={removeTodo}
                todo={todo} />

        </div>
    )
}

