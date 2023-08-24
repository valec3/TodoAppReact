import {FilterButton, FilterButtonContainer, FiltersContainer,ItemsLeft } from "./TodoFilters.components"

const TodoFilters = ({total,activeFilter,showCompletedTodos,showActiveTodos,showAllTodos,handlerClearCompleted}) => {
    return (
        <FiltersContainer>
            <ItemsLeft total={total}/>
            <FilterButtonContainer>
                <FilterButton action={()=>showAllTodos()} active={activeFilter} filter={"All"}/>
                <FilterButton action={()=>showActiveTodos()} active={activeFilter} filter={"Active"}/>
                <FilterButton action={()=>showCompletedTodos()} active={activeFilter} filter={"Completed"}/>
            </FilterButtonContainer>
            <button onClick={handlerClearCompleted} className="text-gray-400 hover:text-white cursor-pointer">
                Borrar completados
            </button>
        </FiltersContainer>
    )
}

export default TodoFilters