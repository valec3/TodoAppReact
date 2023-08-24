const FiltersContainer = ({children}) => {
    return(
        <div className="flex items-center justify-between p-4 bg-gray-700 border border-b border-solid border-gray-600">
            {children}
        </div>
    )
}
const FilterButtonContainer = ({children}) => {
    return(
        <div className="flex items-center space-x-2">
            {children}
        </div>
    )
}
const ItemsLeft = ({total=0}) => {
    return(
        <p className="text-gray-300 text-sm">{total} items left</p>
    )
}

const FilterButton=({action,active,filter})=>{
    const colorTextButton = active===filter ? "text-blue-300" : "text-white"
    
    return(
        <div className="flex">
            <button 
                onClick={action}
                className={`hover:text-white cursor-pointer transition-all duration-300 ease-in-out ${colorTextButton}`}
            >
                {filter}
            </button>
        </div>
    )
}
export  {FiltersContainer,ItemsLeft,FilterButtonContainer,FilterButton};