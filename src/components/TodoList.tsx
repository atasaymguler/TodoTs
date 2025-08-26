import React from "react";
import Todo from "./Todo";
import { useSelector } from "react-redux";
import type { RootState } from "../redux/store";
import type { TodoType } from "../types/Types";

export default function TodoList() {
  // State'nin tipi'ni store'den alırız, export type RootState = ReturnType<typeof store.getState> 'tan gelir RootState oradan import edilmesi önemli.

  const { todos } = useSelector((state: RootState) => state.todo);

  return (
    <div className="!p-2 !mt-4">
      {todos && todos.map((todo: TodoType) => <Todo key={todo.id} todoProps={todo} />)}
    </div>
  );
}
