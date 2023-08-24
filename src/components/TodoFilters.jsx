import {FilterButton, FilterButtonContainer, FiltersContainer,ItemsLeft } from "./TodoFilters.components"

const TodoFilters = () => {
    return (
        <FiltersContainer>
            <ItemsLeft/>
            <FilterButtonContainer>
                <FilterButton action={()=>{}} active={"All"} filter={"All"}/>
                <FilterButton action={()=>{}} active={"All"} filter={"Active"}/>
                <FilterButton action={()=>{}} active={"All"} filter={"Completed"}/>
            </FilterButtonContainer>
        </FiltersContainer>
    )
}

export default TodoFilters