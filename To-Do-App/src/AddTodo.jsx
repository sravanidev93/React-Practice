import { useState } from "react"
import { useDispatch } from "./TodoContextProvider";
export default function AddTodo() {
    const [newTask, setNewTask] = useState("");
    const dispatch=useDispatch();
    return <article id="header">
        <input type="text" name="add-to-do" placeholder="add new tasks" value={newTask}
         onChange={ev => setNewTask(ev.target.value)} />
        <button className="add-btn" onClick={() => {
            if (newTask !== "") {
                dispatch({
            type: "add",
            task:newTask
        }),
         setNewTask("");

            } else {
                alert("Please enter a new task");
            }

        }} >Add</button>
    </article>

}


