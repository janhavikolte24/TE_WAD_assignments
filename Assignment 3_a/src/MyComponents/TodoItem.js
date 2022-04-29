import React from "react";

export const TodoItem = ({ todo, OnDelete }) => {
  return (
    <div>
      <h4>{todo.title}</h4>
      <p> {todo.desc}</p>
      <button
        type="button"
        className="btn btn-danger btn-sm"
        onClick={() => {
          OnDelete(todo);
        }}
      >
        Delete
      </button>
    </div>
  );
};
