
export default function ToDoList({ addedTasks, onTodoUpdate, onTodoDelete }) {
    console.log(addedTasks)
    return <ul className="To-do-list">
        {addedTasks.map(task => {
            return (<li key={task.id}>
                <ToDo todo={task} onUpdate={onTodoUpdate} onDelete={onTodoDelete} />
            </li>)
        })}
    </ul>
}

function ToDo({ todo, onUpdate, onDelete }) {
    return <article className="to-do-tasks">
        <input type="checkbox" id={todo.id} name={todo.task} value={todo.task}
            checked={todo.status}
            onChange={ev => {
                onUpdate({ ...todo, status: ev.target.checked })
            }}
        />
        <span id={todo.id}>
                    {todo.task}

        </span>
        <button className="delete-btn" onClick={ev => onDelete(todo.id)}>
            X
        </button>
    </article>
}