import { prisma } from "../db"
import log from "../logger"

export async function createToDo(input: {
  title: string
  description: string
}) {
  try {
    const todo = await prisma.todo.create({
      data: input,
    })
    return todo
  } catch (error) {
    log.error(error)
    throw new Error("error creating todo")
  }
}

export async function listToDo() {
  try {
    const todos = await prisma.todo.findMany()
    return todos
  } catch (error) {
    console.log("error listing todo", error)
    throw new Error("error listing todo")
  }
}

export async function deleteToDo(id: number) {
  try {
    const todos = await prisma.todo.delete({
      where: {
        id,
      },
    })
    return todos
  } catch (error) {
    log.error(error)
    throw new Error("error deleting todo")
  }
}

export async function updateToDo(
  id: number,
  input: {
    title: string
    description: string
  }
) {
  try {
    const todos = await prisma.todo.update({
      where: {
        id,
      },
      data: {
        title: input.title,
        description: input.description,
      },
    })
    return todos
  } catch (error) {
    log.error(error)
    throw new Error("error updating todo")
  }
}

export async function TodoDone(id: number) {
  try {
    const task = await prisma.todo.findUnique({
      where: { id },
    })

    if (!task) {
      throw new Error(`Task with ID ${id} not found`)
    }

    // Toggle the value of `done`
    const updatedTask = await prisma.todo.update({
      where: { id },
      data: {
        done: !task.done, // Toggle the boolean value
      },
    })

    return updatedTask
  } catch (error) {
    log.error(error)
    throw new Error("error updating todo")
  }
}
