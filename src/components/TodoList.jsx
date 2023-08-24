import Todo from "./Todo"
import TodoFilters from "./TodoFilters"

export const TodoList = ({todos,handleSetCompleted,handlerDeleteTodo}) => {
    return (
        <div className="flex flex-col mt-7 rounded-lg overflow-hidden shadow-2xl">
            {
                todos.map(todo=><Todo key={todo.id} todo={todo} handleSetCompleted={handleSetCompleted} handlerDeleteTodo={handlerDeleteTodo}/>)
            } 
            <TodoFilters total={todos.length}/>
        </div>
    )
}