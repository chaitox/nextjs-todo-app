"use client";
import { startTransition, useOptimistic } from "react";
import { Todo } from "@/generated/prisma";
import React from "react";
import style from "../TodoItem.module.css";
import { IoCheckboxOutline, IoSquareOutline } from "react-icons/io5";
import { updateTodo } from "@/components/helpers/todo";
import { updateTodoAction } from "../actions/todo-actions";
interface Props {
  todo: Todo;

  updateTodo: (todoId: string, completed: boolean) => Promise<Todo>;
}

export const TodosItem = ({ todo, updateTodo }: Props) => {
  const [todoOptimistic, updateTodoOptimistic] = useOptimistic(
    todo,
    (state, newCompleteValue: boolean) => ({
      ...state,
      completed: newCompleteValue,
    })
  );

  const handleUpdateTodo = async () => {
    try {
      startTransition(() => {
        updateTodoOptimistic(!todoOptimistic.completed);
      });
      await updateTodo(todoOptimistic.id, !todoOptimistic.completed);
    } catch (error) {
      startTransition(() => {
        updateTodoOptimistic(!todoOptimistic.completed);
      });
    }
  };

  return (
    <div
      className={todoOptimistic.completed ? style.todoDone : style.todoPending}
    >
      <div className="flex flex-col sm:flex-row justify-start items-center gap-4">
        <div
          onClick={() => {
            handleUpdateTodo();
          }}
          // onClick={() => {
          //   updateTodoAction(todoOptimistic.id, !todoOptimistic.completed);
          // }}
          className={`
            flex p-2 rounded-md cursor-pointer 
            hover:bg-opacity-60 
            bg-blue-100
            ${todoOptimistic.completed ? "bg-blue-100" : "bg-red-100"}
          `}
        >
          {todoOptimistic.completed ? (
            <IoCheckboxOutline size={30} className="text-blue-500" />
          ) : (
            <IoSquareOutline size={30} className="text-gray-400" />
          )}
        </div>
        <div className="text-center sm:text-left">
          {todoOptimistic.description}
        </div>
      </div>
    </div>
  );
};
