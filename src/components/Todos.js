import React, { useState } from "react";

// 프리젠테이셔널 컴포넌트
// 취향에따라 컴포넌트 쪼개서 작성해도 되지만 일단은 한 파일에 작업
// 컴포넌트 최적화를 위하여 React.memo를 사용

// 가장 최소 단위의 할일 목록 아이템
const TodoItem = React.memo(function TodoItem({ todo, onToggle }) {
  return (
    <li
      style={{ textDecoration: todo.done ? "line-through" : "none" }}
      onClick={() => onToggle(todo.id)}
    >
      {todo.text}
    </li>
  );
});

// 할일 목록
const TodoList = React.memo(function TodoList({ todos, onToggle }) {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} onToggle={onToggle} />
      ))}
    </ul>
  );
});

// 아이템 + 목록과 할일을 등록하는 UI까지 포함
function Todos({ todos, onCreate, onToggle }) {
  const [text, setText] = useState("");

  const onChange = (e) => setText(e.target.value);

  const onSubmit = (e) => {
    e.preventDefault();
    onCreate(text);
    setText(""); // input 초기화
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          value={text}
          placeholder="할 일을 입력하세요."
          onChange={onChange}
        />

        <button type="submit">등록</button>
      </form>

      <TodoList todos={todos} onToggle={onToggle} />
    </div>
  );
}

export default Todos;
