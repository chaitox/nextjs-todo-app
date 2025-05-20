import { Todo } from "@/generated/prisma";
import prisma from "@/lib/prisma";

export const updateTodo = async (
  todoId: string,
  completed: boolean
): Promise<Todo> => {
  const body = {
    completed: completed,
  };

  const dbTodo = await fetch(`/api/todos/${todoId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  }).then((res) => res.json());
  return dbTodo;
};


export const createTodo = async (
  description: string
): Promise<Todo> => {
  const body = {
    description: description,    
  };

  const dbTodo = await fetch(`/api/todos`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  }).then((res) => res.json());
  return dbTodo;
};

export const deleteCompleted = async (
  
): Promise<void> => {
  
  const dbTodo = await fetch(`/api/todos`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    
  }).then((res) => res.json());
  
};