const express = require("express");
const {
  getAllTasks,
  getTaskById,
  updateTaskById,
  createTask,
  deleteTaskById,
} = require("../controllers/tasks");

const taskRouter = express.Router();

taskRouter.get("/", getAllTasks);
taskRouter.get("/:id", getTaskById);
taskRouter.put("/:id", updateTaskById);
taskRouter.post("/", createTask);
taskRouter.delete("/:id", deleteTaskById);

module.exports = taskRouter;
