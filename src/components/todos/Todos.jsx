import { useState } from "react";

const Todos = ({ todo, id, setTodos }) => {

  const [isEditing, setIsEditing] = useState(false);
  const [editedTodo, setEditedTodo] = useState(todo);


  const handleDeleteItem = () => {
    setTodos((p) => p.filter((todo) => todo.id !== id));
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleDone = () => {
    setTodos((prevTodos) =>
      prevTodos.map((item) =>
        item.id === id ? { ...item, todo: editedTodo } : item
      )
    );
    setIsEditing(false);
  };

  const handleChange = (e) => {
    setEditedTodo(e.target.value);
  };

  return (
    <li className="todo">
      {isEditing ? (
        <input
          type="text"
          value={editedTodo}
          onChange={handleChange}
          className="editForm"
        />
      ) : (
        <span>{todo}</span>
      )}
      <div className="btns">
        {isEditing ? (
          <button onClick={handleDone} className="doneBtn">
            <i className="fa-solid fa-check"></i>
          </button>
        ) : (
          <button onClick={handleEdit} className="editBtn">
            <i className="fa-solid fa-pen-to-square"></i>
          </button>
        )}
        <button onClick={handleDeleteItem} className="deleteBtn">
          <i className="fa-solid fa-trash"></i>
        </button>
      </div>
    </li>
  );
};

export default Todos;
