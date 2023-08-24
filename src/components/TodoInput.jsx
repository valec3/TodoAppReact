import { useState } from "react";

const TodoInput = ({addTodo}) => {
    const [title, setTitle] = useState('');

    const handleKeyDown = (e) => {
        if(e.key === 'Enter'){
            addTodo(title)
            setTitle('')
        }
    }
    return (
        <div className='mt-6 relative'>
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <span className='border border-gray-500 border-solid p-3 rounded-full'></span>
            </div>
            <input 
                type="text"  
                className='focus:shadow-lg font-inter focus:shadow-green-300 pl-12 w-full py-4 bg-gray-700 rounded-xl outline-none transition-all duration-300 ease-in-out'
                placeholder='Add a new todo...'    
                value={title}
                onChange={e=>setTitle(e.target.value)}
                onKeyDown={e=>handleKeyDown(e)}
            />
        </div>
    ) 
}

export default TodoInput