import prisma from "@/lib/prisma";
import { NextResponse, NextRequest } from "next/server";
import * as yup from "yup";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const take = searchParams.get("take") ?? "10";
  const skip = searchParams.get("skip") ?? "0";

  if (isNaN(+take))
    return NextResponse.json(
      { error: "take tiene que ser un numero" },
      { status: 400 }
    );
  if (isNaN(+skip))
    return NextResponse.json(
      { error: "skip tiene que ser un numero" },
      { status: 400 }
    );

  const todos = await prisma.todo.findMany({
    take: +take,
    skip: +skip,
  });
  return NextResponse.json(todos);
}

const postSChema = new yup.ObjectSchema({
  description: yup.string().required(),
  completed: yup.boolean().default(false),
});
export async function POST(request: Request) {
  try {
    const body = await postSChema.validate(await request.json());

    const { description, completed } = body;
    if (!description)
      return NextResponse.json(
        { error: "description es requerido" },
        { status: 400 }
      );
    const todo = await prisma.todo.create({
      data: {
        description,
        completed,
      },
    });
    return NextResponse.json(todo);
  } catch (error) {
    return NextResponse.json(error);
  }
}

export async function DELETE(request: Request) {
  const todos = await prisma.todo.deleteMany({
    where: {
      completed: true,
    },
  });
  return NextResponse.json(todos);
  
}


