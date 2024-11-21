const express = require("express");
const blogs = require("./data/blogs");
const dotenv = require("dotenv");

const app = express();
dotenv.config();

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.get("/api/blogs", (req, res) => {
  res.json(blogs);
});

app.get("/api/blogs/:id", (req, res) => {
  const blog = blogs.find((n) => n._id === req.params.id);

  res.json(blog);
});

const PORT = process.env.PORT;
app.listen(PORT, console.log(`Server started on PORT ${PORT}`));
