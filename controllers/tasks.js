const getAllTasks = (req, res) => {
  res.send("get all tasks");
};

const createTask = (req, res) => {
  const id = crypto.randomUUID();
  req.body = { id, ...req.body };
  res.json(req.body);
};

const getTask = (req, res) => {
  res.send("get single task");
};

const updateTask = (req, res) => {
  res.send("update specific task");
};

const deleteTask = (req, res) => {
  res.send("delete task");
};

module.exports = { getAllTasks, createTask, getTask, updateTask, deleteTask };
