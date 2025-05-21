"use server";

import { Todo } from "@/generated/prisma";
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";


export const updateTodoAction = async (id: string, completed: boolean):Promise<Todo> => {
  const todo = await prisma.todo.findFirst({
    where: { id },
  });

  if (!todo) {
    throw 'Todo con id ' + id + ' no encontrado';
  }

  const updatedTodo = await prisma.todo.update({
    where: { id },
    data: {
      completed,
    },
  });

  revalidatePath('/dashboard/server-todos');

  return updatedTodo;
};


export const deleteTodoAction = async (id: string):Promise<Todo> => {
  const todo = await prisma.todo.findFirst({
    where: { id },
  });

  if (!todo) {
    throw 'Todo con id ' + id + ' no encontrado';
  }

  const deletedTodo = await prisma.todo.delete({
    where: { id },
  });

  revalidatePath('/dashboard/server-todos');

  return deletedTodo;
};

export const createTodoAction = async (description: string):Promise<Todo> => {
  const todo = await prisma.todo.create({
    data: {
      description,
      completed: false,
    },
  });

  revalidatePath('/dashboard/server-todos');

  return todo;
};