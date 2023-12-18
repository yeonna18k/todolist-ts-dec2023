import { todosTypes } from "../types/todosTypes";
import api from "./api";

const queryGetTodos = async (): Promise<todosTypes[]> => {
  const response = await api.get<todosTypes[]>(`/todos`);
  return response.data;
};

const queryAddTodo = async (newTodo: todosTypes): Promise<void> => {
  await api.post(`/todos`, newTodo);
};

const queryDeleteTodo = async (e: string): Promise<void> => {
  await api.delete(`/todos/${e}`);
};

const querySwitchTodo = async (e: {
  id: string;
  isDone: boolean;
}): Promise<void> => {
  await api.patch(`/todos/${e.id}`, { isDone: !e.isDone });
};

export { queryGetTodos, queryAddTodo, queryDeleteTodo, querySwitchTodo };
