export default function reducer(tasks,action){
    const {type}=action;
    switch (type){
        case "add":
            const {text}=action;
            return [...tasks,{
                id:Date.now(),
                task:text,
                status:false
            }]
        case "update":
            const { updatedTodo}=action;
            return tasks.map(todo=>{
                if (todo.id===updatedTodo.id){
                    return updatedTodo
                }else if(todo.id!==updatedTodo.id){
                    return todo
                }
            })
        case "remove":
            const {deleteId}=action;
            return tasks.filter(todo=>todo.id!==deleteId)
    }

}