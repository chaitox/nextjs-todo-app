import prisma from '@/lib/prisma'
import { NextResponse, NextRequest } from 'next/server'

export async function GET(request: Request) { 

  await prisma.todo.deleteMany()
  const todo = await prisma.todo.createMany({
    data: [
      { description: 'Todo 1', completed: true },
      { description: 'Todo 2', completed: false },
      { description: 'Todo 3', completed: false },
      { description: 'Todo 4', completed: false },
      { description: 'Todo 5', completed: false },
    ],
  })

  return NextResponse.json({ todo})
}