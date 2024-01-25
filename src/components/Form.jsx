import { useState } from "react";

const Form = ({addData}) => {
  const [input, setInput] = useState({ todo: ""});

  const handleSubmit = (e) => {
    e.preventDefault();
    addData((p) => [...p, { ...input, id: Date.now() }]);
    setInput({ todo: "" });
  };

  const change = (e) => {
    setInput((p) => ({ ...p, [e.target.name]: e.target.value }));
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        onChange={change}
        value={input.todo}
        type="text"
        placeholder="Todo Name"
        name="todo"
        className="formInput"
      />
      <button type="submit" className="formBtn">Add</button>
    </form>
  );
};

export default Form;
