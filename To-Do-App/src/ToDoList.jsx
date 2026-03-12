import { useTodos, useDispatch } from "./TodoContextProvider";
export default function ToDoList() {
    const addedTasks = useTodos();
    console.log(addedTasks)
    return <ul className="To-do-list">
        {addedTasks.map(task => {
            return (<li key={task.id}>
                <ToDo todo={task} />
            </li>)
        })}
    </ul>
}

function ToDo({ todo }) {
    const dispatch = useDispatch();
    return <article className="to-do-tasks">
        <input type="checkbox" id={todo.id} name={todo.task} value={todo.task}
            checked={todo.status}
            onChange={ev => dispatch({
                type: "update",
                updatedTodo: { ...todo, status: ev.target.checked }
            }
            )}
        />
        <span id={todo.id}>
            {todo.task}

        </span>
        <button className="delete-btn" onClick={ev => dispatch({
            type: "remove",
            deleteId: todo.id
        })}>
            X
        </button>
    </article>
}