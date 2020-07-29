const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json());

const posts = [];
let currentId = 1;

app.use(cors());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  next();
});

app.get("/posts", (req, res) => {
  return res.json(posts);
});

app.post("/posts", (req, res) => {
  const { author, content } = req.body;
  const post = { author, content, id: currentId++ };
  posts.push(post);
  return res.status(201).json(post);
});

app.get("/posts:id", (req, res) => {
  const { id } = req.params;
  const post = posts.find((i) => i.id === Number(id));
  if (!post) {
    return res.status(404);
  } else {
    return res.json(post);
  }
});

app.put("/posts:id", (req, res) => {
  const { id } = req.params;
  const { author, content } = req.body;
  const post = posts.find((i) => i.id === Number(id));
  if (!post) {
    return res.status(404);
  } else {
    post.author = author;
    post.content = content;
    return res.json(post);
  }
});

app.delete("/posts:id", (req, res) => {
  const { id } = req.params;
  const postIndex = posts.findIndex((i) => i.id === Number(id));
  if (postIndex === -1) {
    return res.sendStatus(303);
  } else {
    // 200
    // 200 + deleted resource
    // 204 (no content)
    return res.json(posts.splice(postIndex, 1));
  }
});

app.listen(3000, () => {
  console.log("CORS-enabled web server listening on port 3000");
});
