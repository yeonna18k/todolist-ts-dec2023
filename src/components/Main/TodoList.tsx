import React from "react";
import { Todos } from "../../components/todos/Todos";

export const TodoList = () => {
  return (
    <>
      <Todos isActive={true} />
      <Todos isActive={false} />
    </>
  );
};
