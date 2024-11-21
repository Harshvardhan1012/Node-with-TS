import { Application } from "express"
import {
  createToDoController,
  deleteToDoController,
  getToDoController,
  TodoDoneController,
  updateToDoController,
} from "./controller/ToDoController"

export default function (app: Application) {
  app.post("/todos", createToDoController)
  app.get("/todos", getToDoController)
  app.put("/todos", updateToDoController)
  app.delete("/todos", deleteToDoController)
  app.put("/todos/:id", TodoDoneController)
}
