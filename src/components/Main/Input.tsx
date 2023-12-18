import React, { useEffect, useState } from "react";
import * as S from "../../styles/Input.Styled";
import uuid from "react-uuid";
import { toast } from "react-toastify";
import { queryAddTodo } from "../../api/todos";
import { useQueryClient, useMutation, useQuery } from "react-query";
import { todosTypes } from "../../types/todosTypes";

export const Input = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const queryClient = useQueryClient();

  const addnotify = () => {
    toast.success("등록 완료!", {
      autoClose: 2000,
      pauseOnFocusLoss: false,
    });
  };

  const mutation = useMutation(queryAddTodo, {
    onSuccess: (data) => {
      queryClient.invalidateQueries("todos");
    },
  });

  const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newTodo = {
      id: uuid(),
      title,
      content,
      isDone: false,
    };
    try {
      mutation.mutate(newTodo);
      addnotify();
      setTitle("");
      setContent("");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <S.Contatiner>
      <form onSubmit={onSubmitHandler}>
        <S.Label htmlFor="title">Title</S.Label>
        <S.Input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <S.Label htmlFor="content">Content</S.Label>
        <S.Input
          type="text"
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <S.Button>⏎</S.Button>
      </form>
    </S.Contatiner>
  );
};
