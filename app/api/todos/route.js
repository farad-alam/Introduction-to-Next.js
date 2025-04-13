import todos from '@/public/todos'

export async function GET() {
  return Response.json(todos)
}

export async function POST(request) {
  const todo = await request.json()
  const newTodo = {
    userId: 1,
    id: todos.length + 1,
    title: todo.title,
    completed: false,
  };
  console.log(todo);
  todos.push(newTodo)
  return new Response(JSON.stringify(newTodo),{
    headers : {
      "Content-Type": "application/json"
    },
    status: 201
  });
}

