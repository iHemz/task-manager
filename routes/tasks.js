const express = require("express");
const cors = require("cors");
const router = express.Router();
const {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
} = require("../controllers/tasks");

const corsOption = {
  origin: "https://tasker-coral-eight.vercel.app/",
  optionsSuccessStatus: 200,
};

router.use(cors(corsOption));

router.route("/").get(getAllTasks).post(createTask);

router.route("/:id").get(getTask).patch(updateTask).delete(deleteTask);

module.exports = router;
