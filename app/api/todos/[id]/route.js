import todos from "@/public/todos";
import { redirect } from "next/navigation";

export async function GET(request, { params }) {
  const todoID = params.id;
  if (parseInt(todoID) > todos.length) {
    redirect("/api/todos")
  }
  const findTargetedTodo = todos.find((todo) => todo.id === parseInt(todoID));

  return Response.json(findTargetedTodo);
}

export async function PATCH(request, { params }) {
  const body = await request.json();
  const todoID = params.id;
  const findTodoIndex = todos.findIndex((todo) => todo.id === parseInt(todoID));
  todos[findTodoIndex].title = body.title;
  console.log(todos[findTodoIndex]);
  return Response.json(todos[findTodoIndex]);
}
