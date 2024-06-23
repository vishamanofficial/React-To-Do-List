// import React, { useState } from "react";

// const TodoList = () => {
//   const [todos, setTodos] = useState([]);
//   const [newTodo, setNewTodo] = useState("");

//   const handleAddTodo = () => {
//     if (newTodo.trim() !== "") {
//       setTodos([...todos, { text: newTodo.trim(), checked: false }]);
//       setNewTodo("");
//     }
//   };

//   const handleDeleteTodo = (index) => {
//     const newTodos = [...todos];
//     newTodos.splice(index, 1);
//     setTodos(newTodos);
//   };

//   const handleToggleTodo = (index) => {
//     const newTodos = [...todos];
//     newTodos[index].checked = !newTodos[index].checked;
//     setTodos(newTodos);
//   };

//   return (
//     <div>
//       <h1>To-Do List</h1>
//       <div>
//         <input
//           type="text"
//           value={newTodo}
//           onChange={(e) => setNewTodo(e.target.value)}
//         />
//         <button onClick={handleAddTodo}>Add</button>
//       </div>

//       <ul>
//         {todos.map((todo, index) => (
//           <li key={index}>
//             <div>
//               <input
//                 type="checkbox"
//                 checked={todo.checked}
//                 onChange={() => handleToggleTodo(index)}
//               />
//               <span>{todo.text}</span>
//             </div>
//             <button onClick={() => handleDeleteTodo(index)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default TodoList;






























import React, { useState } from "react";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const handleAddTodo = () => {
    if (newTodo.trim() !== "") {
      setTodos([...todos, { text: newTodo.trim(), checked: false }]);
      setNewTodo("");
    }
  };

  const handleDeleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const handleToggleTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].checked = !newTodos[index].checked;
    setTodos(newTodos);
  };

  return (
    <div style={{display:"flex",
      justifyContent:"center",
      alignItems:"center",
      flexDirection:"column"
    }}>
      <h1 style={{marginLeft:"-25px"}}>To-Do List</h1>
      <div>
        <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button onClick={handleAddTodo}>Add</button>
      </div>

      <ul style={{marginLeft:"-130px"}}>
        {todos.map((todo, index) => (
          <li
            key={index}
            style={{
              display: "flex",
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <input
                type="checkbox"
                checked={todo.checked}
                onChange={() => handleToggleTodo(index)}
              />
              <span
                style={{
                  fontSize:"23px",
                  marginRight: "10px",
                  textDecoration: todo.checked ? "line-through" : "none",
                }}
              >
                {todo.text}
              </span>
            </div>
            <button
              style={{ marginTop: "5px", marginBottom: "5px" }}
              onClick={() => handleDeleteTodo(index)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
