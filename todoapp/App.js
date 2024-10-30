// // src/App.js
// import React, { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';

// function App() {
//   const dispatch = useDispatch();
//   const { todos, loading, error } = useSelector((state) => state);
//   const [todoText, setTodoText] = useState('');

//   const fetchTodos = () => {
//     dispatch({ type: 'FETCH_TODOS_REQUEST' });
//   };

//   const addTodo = () => {
//     if (todoText.trim()) {
//       dispatch({ type: 'ADD_TODO', payload: { id: Date.now(), text: todoText } });
//       setTodoText('');
//     }
//   };

//   const removeTodo = (id) => {
//     dispatch({ type: 'REMOVE_TODO', payload: id });
//   };

//   return (
//     <div>
//       <h1>To-Do App with Redux-Saga</h1>
//       <button onClick={fetchTodos} disabled={loading}>
//         {loading ? 'Loading...' : 'Fetch Todos'}
//       </button>
//       {error && <p style={{ color: 'red' }}>Error: {error}</p>}
//       <ul>
//         {todos.map((todo) => (
//           <li key={todo.id}>
//             {todo.text} <button onClick={() => removeTodo(todo.id)}>Remove</button>
//           </li>
//         ))}
//       </ul>
//       <input
//         type="text"
//         value={todoText}
//         onChange={(e) => setTodoText(e.target.value)}
//         placeholder="Add a new todo"
//       />
//       <button onClick={addTodo}>Add Todo</button>
//     </div>
//   );
// }

// export default App;



// toolkit
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodosRequest, addTodo, removeTodo } from './reducers/dataSlice';

function App() {
  const dispatch = useDispatch();
  const { todos, loading, error } = useSelector((state) => state.todos);
  const [todoText, setTodoText] = useState('');

  const handleFetchTodos = () => {
    dispatch(fetchTodosRequest());
  };

  const handleAddTodo = () => {
    if (todoText.trim()) {
      dispatch(addTodo({ id: Date.now(), text: todoText }));
      setTodoText('');
    }
  };

  const handleRemoveTodo = (id) => {
    dispatch(removeTodo(id));
  };

  return (
    <div>
      <h1>To-Do App with Redux Toolkit and Redux-Saga</h1>
      <button onClick={handleFetchTodos} disabled={loading}>
        {loading ? 'Loading...' : 'Fetch Todos'}
      </button>
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text} <button onClick={() => handleRemoveTodo(todo.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <input
        type="text"
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
        placeholder="Add a new todo"
      />
      <button onClick={handleAddTodo}>Add Todo</button>
    </div>
  );
}

export default App;
