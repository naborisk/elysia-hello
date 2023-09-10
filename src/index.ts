import { Elysia } from 'elysia'

let todos: Array<string> = []

const app = new Elysia()
  .get('/', () => 'hello world!')
  .get('/todos', () => {
    return todos
  })
  .post('/todos/add/:todo', ({ params }) => {
    todos.push(params.todo)
    return `added ${params.todo}`
  })
  .delete('/todos/delete/:todo', ({ params }) => {
    todos = todos.filter(todo => todo !== params.todo)
    return `deleted ${params.todo}`
  })
  .listen(3000)

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
)
