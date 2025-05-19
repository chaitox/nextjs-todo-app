import { Todo } from "@/generated/prisma";
import prisma from "@/lib/prisma";
import { get } from "http";
import { NextResponse, NextRequest } from "next/server";
import * as yup from "yup";

const getTodo = async (id:string):Promise<Todo|null>=>{
  const todo = await prisma.todo.findUnique({
    where:{
        id
    }
  });
  return todo;
}
export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const id = (await params).id;
  const todo = getTodo(id);

  if(!todo)
    return NextResponse.json({error: "No existe el todo"}, {status: 404})

  return NextResponse.json(todo);
}

const putSchema = new yup.ObjectSchema({
  description: yup.string().optional(),
  completed: yup.boolean().optional(),
})
export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const id = (await params).id;
  const todo = getTodo(id);

  if(!todo)
    return NextResponse.json({error: "No existe el todo"}, {status: 404})

  const body = await putSchema.validate(await request.json());

  const { description, completed } = body;

  const todoUpdated = await prisma.todo.update({
    where:{id},
    data:{
      description,
      completed
    }
  })

  return NextResponse.json(todoUpdated);
}
