
import { useTodos } from "./TodoContextProvider";

export default function CompletedTodo() {
    const todos = useTodos();
    const completedTodos = todos.filter(todo => todo.status);
    return <section id="completed-todos">
        <h2>Completed Tasks</h2>
        {completedTodos?.length ? (
            completedTodos.map((todo) => <p className="completed" key={todo.id}>{todo.task}</p>)
        ) : (
            <p>No Tasks completed Yet ....</p>
        )}
    </section>
}