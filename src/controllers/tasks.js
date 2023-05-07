const tasks = [
  {
    id: 1,
    description: "task 1",
    done: false,
  },
];

let id = 1; //self increase

const getAllTasks = (req, res) => {
  //解释什么是关联
  //   try {
  //     const tasks = taskModel.findAllTasks();
  //     res.json(tasks);
  //   } catch (e) {
  //     res.status(404).json({ error: "e.message" });
  //   }

  const { description } = req.query;
  if (description) {
    const filteredTasks = tasks.filter((task) =>
      task.description.includes(description)
    );
    res.json(filteredTasks);
    return;
  }

  res.json(tasks);
  return;
};

const getTaskById = (req, res) => {
  const { id } = req.params;
  const numericId = Number(id);
  //不用判断id不存在，不存在的话，根本进入不了这里

  if (!(Number.isInteger(numericId) && numericId > 0)) {
    //refined
    res.status(404).json({ error: "invalid id!" });
    return;
  }

  const taskFound = tasks.find((task) => task.id === numericId);
  if (!taskFound) {
    res.status(404).json({ error: "task not found" });
    return;
  }

  res.status(200).json(taskFound);
  return;
};

const updateTaskById = (req, res) => {
  const { id } = req.params;
  const { description, done } = req.body;
  const numericId = Number(id);
  if (!(Number.isInteger(numericId) && numericId > 0)) {
    //refined
    res.status(404).json({ error: "invalid id!" });
    return;
  }

  //data validation
  //Check existence
  //check type
  //如果字段多的话，就很难这么判断了
  //如果打算把description置为空的话，这么写就不行了。
  if (!description && done !== true && done !== false) {
    res.status(400).json({ error: "Please modify your put body" });
    return;
  }

  let taskFound = tasks.find((task) => task.id === Number(id));
  if (!taskFound) {
    res.status(404).json({ error: "task not found" });
    return;
  }

  taskFound.description = description ?? taskFound.description;
  if (done === true || done === false) {
    taskFound.done = done;
  }

  res.status(200).json(taskFound);
  return;
};

const createTask = (req, res) => {
  const { description } = req.body;

  if (!description) {
    res.status(400).json({ error: "invalid body" });
    return;
  }
  const taskNew = { id: ++id, description, done: false };

  tasks.push(taskNew);
  res.status(201).json(taskNew);
  return;
};

const deleteTaskById = (req, res) => {
  const { id } = req.params;
  const numericId = Number(id);

  if (!(Number.isInteger(numericId) && numericId > 0)) {
    res.status(404).json({ error: "invalid id!" });
    return;
  }

  const index = tasks.findIndex((task) => task.id === Number(id));
  if (index < 0) {
    res.status(404).json({ error: "task not found" });
    return;
  }

  tasks.splice(index, 1);
  res.sendStatus(204);
};

module.exports = {
  getAllTasks,
  getTaskById,
  updateTaskById,
  deleteTaskById,
  createTask,
};
