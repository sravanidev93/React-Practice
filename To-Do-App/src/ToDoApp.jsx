import TodoProvider from "./TodoContextProvider";
import AddTodo from "./AddTodo";
import ToDoList from "./ToDoList";
import CompletedTodo from "./CompletedTodo";
export default function ToDoApp() {

    return <section id="todo-app">
        <h1 id="title">TO DO APP</h1>
        <TodoProvider>
            <AddTodo  />
            <ToDoList />
            <CompletedTodo/>

        </TodoProvider>
    </section>
}