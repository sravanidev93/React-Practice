import { useReducer, useEffect } from "react"
import AddTodo from "./AddTodo";
import ToDoList from "./ToDoList";
import reducer from "./todosreducer";
export default function ToDoApp() {
    //must add error boundary here it throws error when parsing empty todo or unavailable
    //  todo in local storage
    const [tasks, dispatch] = useReducer(reducer, [],
        () => {
            try {
                if (localStorage.getItem("todos")) {
                    return JSON.parse(localStorage.getItem("todos"))
                } else {
                    return []
                }
            } catch (error) {
                console.log("error occured while parsing todo", error);
                return []
            }
        }
    )
    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(tasks));
    }, [tasks])
    function handleAddTodo(text) {
        dispatch({
            type: "add",
            text
        })
    }


    function handleUpdateTodo(todo) {
        dispatch({
            type: "update",
            updatedTodo: todo
        }
        )
    };
    function handleDeleteTodo(todoId) {
        dispatch({
            type: "remove",
            deleteId: todoId
        })
    };

    return <section id="todo-app">
        <h1 id="title">TO DO APP</h1>
        <AddTodo onAddTodo={handleAddTodo} />
        <ToDoList addedTasks={tasks} onTodoUpdate={handleUpdateTodo} onTodoDelete={handleDeleteTodo} />
    </section>
}