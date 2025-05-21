"use client";
import { Todo } from "@/generated/prisma";
import React from "react";
import { TodosItem } from "./TodosItem";

// import * as api from "@/components/helpers/todo";

import { useRouter } from "next/navigation";
import { updateTodoAction } from "../actions/todo-actions";


interface Props {
  todos?: Todo[];
}
export const TodosGrid = ({ todos = [] }: Props) => {

  const router = useRouter();
  

//  const updateTodo = async (todoId: string, completed: boolean):Promise<Todo> => {
//   const updateTodo = await api.updateTodo(todoId, completed);
//   router.refresh();
//   return updateTodo;
//  }


  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
      {todos.map((todo) => (
        <TodosItem key={todo.id} todo={todo} updateTodo={ updateTodoAction }/>
      ))}
    </div>
  );
};
