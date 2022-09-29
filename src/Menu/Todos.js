import React, {useState} from "react";
import Icon from "./Icon";

const Todo = () => {
  const [todos, setTodos] = useState(
    [
        {
          id: 1,
          title: "Mengerjakan logbook",
          completed: true,
        },
        {
          id: 2,
          title: "Mengerjakan praktikum",
          completed: false,
        },
      ]
  )

  const [title, setTitle] = useState("")

  const submitHandler = () => {
    if(title === ""){
        alert ("Masukkan todo terlebih dahulu")
    } else {
        let todosResult = todos
        let id = todos[todos.length-1].id +1;
        let completed = false;
        let result = {
            id, title, completed
        }
        todosResult.push(result)
        console.log(todosResult)
        setTodos(todosResult);
    }
  }

  return (
    <>
      <div className="todo-add">
        <div classname="todo-add-input">
          <input onChange = {(e) => setTitle(e.target.value)} className="input" type="text" placeholder="Add todo.." />
        </div>
        <div className="todo-add-btn">
          <button onClick={submitHandler} className="btn"> Submit </button>
        </div>
      </div>
      <div className="container-item body">
        {todos.length !== 0 ? (
          todos.map((todo) => {
            const { id, title, completed } = todo;

            return <Icon todo={todo} />;
          })
        ) : (
          <p> Loading.. </p>
        )}
      </div>
    </>
  );
};

export default Todo;
