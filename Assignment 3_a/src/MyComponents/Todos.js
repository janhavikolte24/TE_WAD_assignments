import React from "react";
import { TodoItem } from "./TodoItem";

export const Todos = (props) => {
  let myStyle = {
    minHeight: "70vh",
    margin: "40px auto",
  };
  return (
    <div className="container" style={myStyle}>
      <h4 className="text-center my-3">To Do List</h4>
      {props.todolist.length === 0
        ? "No to do list to display"
        : props.todolist.map((todo) => {
            return (
              <TodoItem todo={todo} key={todo.sno} OnDelete={props.OnDelete} />
            );
          })}
    </div>
  );
};
