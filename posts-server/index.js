const express = require("express");
const app = express();
app.use(express.json());

const posts = [];
let currentId = 1;

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

app.listen(3000, () => {
  console.log("server listening on port 3000");
});
