const Todo = ({todo}) => {
    const {title,completed} = todo
    const titleMark = completed ? 'line-through text-gray-500' : 'text-gray-100'
    return (
        <div 
            className="flex items-center justify-between p-3 bg-gray-700 border-b border-solid font-inter border-gray-600"
        >
            <div className="flex items-center">
                {
                    completed ? (
                        <div className="bg-green-700 p-1 rounded-full cursor-pointer">
                            <img className="h-4 w-4 " src="./check-icon.svg" alt="icono check" />
                        </div>
                    ):(
                        <span className="border border-solid border-gray-500 rounded-full p-3 cursor-pointer"></span>
                    )
                }
                <p className={`pl-3 ${titleMark}`}>{title}</p>
            </div>
            <img className="h-5 w-5 cursor-pointer transition-all duration-300 ease-in" src="./close-icon.svg" alt="icono de cierre" />
        </div>
    )
}

export default Todo