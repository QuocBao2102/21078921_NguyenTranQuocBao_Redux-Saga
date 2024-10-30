import React, { useState } from 'react';
import { useRecoilState, useSetRecoilState, useRecoilValue } from 'recoil';
import { todoListState, loadingState, errorState } from './recoil/atom';

function App() {
  const [todos, setTodos] = useRecoilState(todoListState);
  const [loading, setLoading] = useRecoilState(loadingState);
  const error = useRecoilValue(errorState);
  const [todoText, setTodoText] = useState('');

  const fetchTodos = () => {
    setLoading(true);
    // Giả lập gọi API lấy dữ liệu sau 1 giây
    setTimeout(() => {
      setTodos([
        { id: 1, text: 'Learn Recoil' },
        { id: 2, text: 'Build To-Do App' },
      ]);
      setLoading(false);
    }, 1000);
  };

  const addTodo = () => {
    if (todoText.trim()) {
      setTodos([...todos, { id: Date.now(), text: todoText }]);
      setTodoText('');
    }
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <h1>To-Do App with Recoil</h1>
      <button onClick={fetchTodos} disabled={loading}>
        {loading ? 'Loading...' : 'Fetch Todos'}
      </button>
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text} <button onClick={() => removeTodo(todo.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <input
        type="text"
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
        placeholder="Add a new todo"
      />
      <button onClick={addTodo}>Add Todo</button>
    </div>
  );
}

export default App;
