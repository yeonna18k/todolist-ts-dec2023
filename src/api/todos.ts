import { todosTypes } from "../types/todosTypes";
import api from "./api";

const queryGetTodos = async () => {
  const response = await api.get<todosTypes[]>(`/todos`);
  return response.data;
};

const queryAddTodo = async (newTodo: object) => {
  await api.post(`/todos`, newTodo);
};

const queryDeleteTodo = async (e: string) => {
  await api.delete(`/todos/${e}`);
};

const querySwitchTodo = async (e: { id: string; isDone: boolean }) => {
  await api.patch(`/todos/${e.id}`, { isDone: !e.isDone });
};

export { queryGetTodos, queryAddTodo, queryDeleteTodo, querySwitchTodo };
