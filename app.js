const express = require("express");
const app = express();
const tasks = require("./routes/tasks");
const connectDB = require("./db/connect");
const config = require("./config");
const port = 3000;

app.use(express.static("./public"));
app.use(express.json());

// Inject API base URL into HTML files
app.use((req, res, next) => {
  if (req.path.endsWith(".html")) {
    const originalSend = res.send;
    res.send = function (data) {
      if (typeof data === "string") {
        data = data.replace(
          "</head>",
          `<script>window.API_BASE_URL = '${config.apiBaseUrl}';</script></head>`,
        );
      }
      return originalSend.call(this, data);
    };
  }
  next();
});

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
