import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
// import { useRef } from "react";
import { Todo } from "./useTodos";
import { CACHE_KEY_TODOS } from "../react-query/constants";

interface AddTodoContext {
    previousTodo?: Todo[];
  }
  

const useAddTodo = (onAdd:()=>void) => {
    const queryClient = useQueryClient();

  return useMutation<Todo, Error, Todo, AddTodoContext>({
    mutationFn: (todo: Todo) =>
      axios
        .post<Todo>("https://jsonplaceholder.typicode.com/todos", todo)
        .then((res) => res.data),

    onMutate: (newTodo: Todo) => {
      // Get Todos List before saving datainto chache because if serve face some error than we have to make list in its actual list.
      const previousTodo = queryClient.getQueryData<Todo[]>(CACHE_KEY_TODOS);
      
      // update data into cache directly
      queryClient.setQueryData<Todo[]>(CACHE_KEY_TODOS, (todos = []) => [
        newTodo,
        ...todos,
      ]);

      onAdd();

      return { previousTodo };
    },

    onSuccess: (savedTodo: Todo, newTodo: Todo) => {
      queryClient.setQueryData<Todo[]>(CACHE_KEY_TODOS, (todos) =>
        todos?.map((todo) => (todo === newTodo ? savedTodo : todo))
      );
    },

    onError: (error, newTodo, context) => {
      if (!context) return;
      queryClient.setQueryData<Todo[]>(CACHE_KEY_TODOS, context.previousTodo);
    },
  });

}

export default useAddTodo;