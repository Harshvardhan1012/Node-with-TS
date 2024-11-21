import { Request, Response } from "express"
import {
  createToDo,
  deleteToDo,
  listToDo,
  TodoDone,
  updateToDo,
} from "../service/ToDoService"
import { get } from "lodash"

export async function createToDoController(req: Request, res: Response) {
  const toDo = await createToDo(req.body)
  return res.send(toDo).status(200)
}

export async function getToDoController(req: Request, res: Response) {
  const toDo = await listToDo()
  return res.send(toDo).status(200)
}

export async function updateToDoController(req: Request, res: Response) {
  const id = parseInt(get(req.query, "id") as string, 10)
  if (isNaN(id)) {
    return res.status(400).send({ error: "Invalid ID" })
  }
  const toDo = await updateToDo(id, req.body)
  return res.send(toDo).status(200)
}

export async function deleteToDoController(req: Request, res: Response) {
  const id = parseInt(get(req.query, "id") as string, 10)
  if (isNaN(id)) {
    return res.status(400).send({ error: "Invalid ID" })
  }
  const toDo = await deleteToDo(id)
  return res.send(toDo).status(200)
}

export async function TodoDoneController(req: Request, res: Response) {
  const id = parseInt(get(req.params, "id") as string, 10)
  if (isNaN(id)) {
    return res.status(400).send({ error: "Invalid ID" })
  }
  const done = await TodoDone(id)
  return res.send(done).status(200)
}
