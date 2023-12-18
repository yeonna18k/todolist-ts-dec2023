import * as S from "../../styles/Todos.Styled";
import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css";
import {
  queryDeleteTodo,
  queryGetTodos,
  querySwitchTodo,
} from "../../api/todos";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { todosTypes } from "../../types/todosTypes";

type activeProps = {
  isActive: boolean;
};

export const Todos = ({ isActive }: activeProps) => {
  const notify = () =>
    toast.success("삭제 완료!", {
      autoClose: 2000,
      pauseOnFocusLoss: false,
    });
  const queryClient = useQueryClient();
  const deleteMutation = useMutation(queryDeleteTodo, {
    onSuccess: (data) => {
      queryClient.invalidateQueries("todos");
    },
  });
  const switchMutation = useMutation(querySwitchTodo, {
    onSuccess: (data) => {
      queryClient.invalidateQueries("todos");
    },
  });

  const { isLoading, isError, data } = useQuery("todos", queryGetTodos);
  if (isLoading) {
    return <p>Loading ...</p>;
  }
  if (isError) {
    return <p>Error !</p>;
  }

  // 스위치 핸들러
  const onClickDoneHandler = (e: { id: string; isDone: boolean }) => {
    switchMutation.mutate(e);
  };
  // 삭제 핸들러
  const onClickDeleteHandler = (e: string) => {
    if (window.confirm("삭제하시겠습니까?")) {
      deleteMutation.mutate(e);
      notify();
    } else {
      return;
    }
  };

  return (
    <>
      <S.Container>
        <S.Title>{isActive ? "TODO" : "DONE"}</S.Title>
        <S.CardWrapper>
          {data
            ?.filter((el) => el.isDone === !isActive)
            .map((item) => {
              return (
                <S.Card key={item.id}>
                  <S.CardTitle>{item.title}</S.CardTitle>
                  <S.CardContent>{item.content}</S.CardContent>
                  <S.ButtonWrapper>
                    <S.CardButton
                      onClick={() =>
                        onClickDoneHandler({
                          id: item.id,
                          isDone: item.isDone,
                        })
                      }
                    >
                      {isActive ? "완료" : "취소"}
                    </S.CardButton>
                    <S.CardButton onClick={() => onClickDeleteHandler(item.id)}>
                      삭제
                    </S.CardButton>
                  </S.ButtonWrapper>
                </S.Card>
              );
            })}
        </S.CardWrapper>
      </S.Container>
    </>
  );
};
