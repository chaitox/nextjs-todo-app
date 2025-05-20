import { NewTodo } from "@/components/dashboard/rest-todos/NewTodo";
import { TodosGrid } from "@/components/dashboard/rest-todos/TodosGrid";
import prisma from "@/lib/prisma";

export const metadata = {
  title: "SEO Title",
  description: "SEO Title",
};

export default async function RestTodoPage() {
  const todos = await prisma.todo.findMany();
  return (
    <div className="flex flex-col w-full h-full p-4">
      <div className="mr-2 mb-3">
        <NewTodo />
      </div>
      <TodosGrid todos={todos} />
    </div>
  );
}
