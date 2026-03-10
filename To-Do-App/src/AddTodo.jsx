import { useState } from "react"
export default function AddTodo({ onAddTodo }) {
    const [newTask, setNewTask] = useState("");
    return <article id="header">
        <input type="text" name="add-to-do" placeholder="add new tasks" value={newTask} onChange={ev => setNewTask(ev.target.value)} />
        <button className="add-btn" onClick={() => {
            if (newTask !== "") {
                onAddTodo(newTask);
                setNewTask("");

            } else {
                alert("please enter the new task")
            }

        }} >Add</button>
    </article>

}