'use client'
import { Todo } from "@/generated/prisma";
import React from "react";
import style from "../TodoItem.module.css";
import { IoCheckboxOutline, IoSquareOutline } from "react-icons/io5";
import { updateTodo } from "@/components/helpers/todo";
interface Props {
  todo: Todo;
  
    updateTodo: (todoId: string, completed: boolean) => Promise<Todo>;
}

export const TodosItem = ({ todo ,updateTodo}: Props) => {
  
  return (
    <div className={todo.completed ? style.todoDone : style.todoPending}>
      <div className="flex flex-col sm:flex-row justify-start items-center gap-4">
        <div
          onClick={() => {
            updateTodo(todo.id, !todo.completed)
          }}
          className={`
            flex p-2 rounded-md cursor-pointer 
            hover:bg-opacity-60 
            bg-blue-100
            ${todo.completed ? "bg-blue-100" : "bg-red-100"}
          `}>
            {
              todo.completed ? (
                <IoCheckboxOutline size={30} className="text-blue-500" />
              ) : (
                <IoSquareOutline size={30} className="text-gray-400" />
              )
            }
          
        </div>
        <div className="text-center sm:text-left">
            {todo.description}
        </div>
      </div>
    </div>
  );
};
