import { useEffect, useState } from "react";
import Title from "./components/Title";
import TodoInput from "./components/TodoInput";
import { TodoList } from "./components/TodoList";

function App() {

  const [todos, setTodos] = useState([{
      id: 1,
      title: 'Watch the next Marvel Movie',
      completed: true,
    },
    {
      id: 2,
      title: 'Record the next Video',
      completed: false,
    },
    {
      id: 3,
      title: 'Wash the dishes',
      completed: false,
    },
    {
      id: 4,
      title: 'Study 2 hours',
      completed: false,
  }]);

  useEffect(() => {console.log(todos)}, [todos]);

  const addTodo = (title) => {
    const lastId = todos.length>0 ? todos[todos.length - 1].id : 0;
    const newTodo = {
      id: lastId + 1,
      title,
      completed: false,
    }
    const newTodos = [...todos, newTodo];
    setTodos(newTodos);
  }

  const handleSetCompleted = (id) => {
    const updateList = todos.map(todo => {
      if(todo.id === id){
        todo.completed = !todo.completed;
      }
      return todo;
    });
    setTodos(updateList);
  }
  const handlerDeleteTodo = (id) => {
    const updateList = todos.filter(todo => todo.id !== id);
    setTodos(updateList);
  }
  return (
    <div className="App bg-gray-800 min-h-screen h-full text-gray-100 flex items-center justify-center py-20 px-5">
      <div className="container flex flex-col max-w-xl">
        <Title />
        <TodoInput addTodo={addTodo}/>
        <TodoList todos={todos} handleSetCompleted={handleSetCompleted} handlerDeleteTodo={handlerDeleteTodo}/>
      </div>

    </div>
  );
}

export default App;
