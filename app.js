const express = require("express");
const mongoose = require("mongoose");
const core = require("./middleware/security");
const errorsHandler = require("./middleware/errors");
const usersRouter = require("./routes/userRoute");
const blogRouter = require("./routes/blogsRoute");

// console.log({usersRouter})
const { port, mongoURL } = require("./config/env");
const path = require("path");


mongoose.connect(mongoURL, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});
mongoose.connection.on("error", console.error);
mongoose.connection.on("open", () => {
  console.log("Database connected!");
});

const app = express();
app.use(core);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api/v1/users", usersRouter);
app.use("/api/v1/blogs", blogRouter);


if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}
app.use(errorsHandler);
app.listen(port, () => {
  console.log("====================================");
  console.log("Server start with port: " + port);
  console.log("====================================");
});
















// const express = require("express");
// const mongoose = require("mongoose");
// const core = require("./middleware/security");
// const errorsHandler = require("./middleware/errors");
// const usersRouter = require("./routes/users");
// const { port, mongoURL } = require("./config/env");



// mongoose.connect(mongoURL, {
//   useNewUrlParser: true,
//   useCreateIndex: true,
//   useUnifiedTopology: true,
// });


// mongoose.connection.on("error", console.error);
// mongoose.connection.on("open", () => {
//   console.log("Database connected!");
// });


// const app = express();
// app.use(core);


// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());


// app.use("/api/v1/users", usersRouter);


// app.use(errorsHandler);

// app.listen(port, () => {
//   console.log("==============================");
//   console.log("Server start with port: " + port);
//   console.log("==============================");
// });
