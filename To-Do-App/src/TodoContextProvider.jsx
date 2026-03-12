
import { createContext, useContext, useReducer, useEffect } from "react";
import reducer from "./todosReducer";

const TodoContext = createContext(null);
const TodoDispatchContext = createContext(null);

export default function TodoProvider({ children }) {
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
    }, [tasks]);

    return (
        <TodoContext.Provider value={tasks}>
            <TodoDispatchContext.Provider value={dispatch}>
                {children}
            </TodoDispatchContext.Provider>
        </TodoContext.Provider>

    )

}

export const useTodos = () => useContext(TodoContext);
export const useDispatch = () => useContext(TodoDispatchContext);