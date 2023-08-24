import Todo from "./Todo"
import TodoFilters from "./TodoFilters"

export const TodoList = ({todos,handleSetCompleted,handlerDeleteTodo,activeFilter,showCompletedTodos,showActiveTodos,showAllTodos,handlerClearCompleted}) => {
    return (
        <div className="flex flex-col mt-7 rounded-lg overflow-hidden shadow-2xl">
            {
                todos.map(todo=><Todo key={todo.id} todo={todo} handleSetCompleted={handleSetCompleted} handlerDeleteTodo={handlerDeleteTodo}/>)
            } 
            <TodoFilters 
                total={todos.length}
                activeFilter={activeFilter}
                showCompletedTodos={showCompletedTodos}
                showActiveTodos={showActiveTodos}
                showAllTodos={showAllTodos}
                handlerClearCompleted={handlerClearCompleted}
            />
        </div>
    )
}