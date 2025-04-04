const express = require("express");
const cors = require("cors");
const app = express();
const tasks = require("./routes/tasks");
const connectDB = require("./db/connect");
const port = 3000;

const corsOption = {
  origin: "https://tasker-coral-eight.vercel.app",
  optionsSuccessStatus: 200,
};

app.use(cors(corsOption));
app.use(express.static("./public"));
app.use(express.json());

app.use("/api/v1/tasks", tasks);

const start = async () => {
  try {
    await connectDB();
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
