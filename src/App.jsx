import Form from "./components/Form";
import { useState } from "react";
import Todos from "./components/todos/Todos";

function App() {
  const [todos, setTodos] = useState([]);

  return (
    <>
      <div className="container">
        <h1 className="title">Todo List</h1>
        <Form addData={setTodos}/>
        <ul className="todoList">
          {todos.map((todo) => (
            <Todos key={todo.id} setTodos={setTodos} {...todo} />
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
