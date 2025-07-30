import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs", { posts });
});

app.get("/edit", (req, res) => {
  res.render("edit.ejs", { posts });
});

app.post("/posts", (req, res) => {
  const { title, content } = req.body;
  const newPost = {
    id: Date.now(),
    title,
    content,
  };
  posts.push(newPost);
  res.render("index.ejs", { posts });
});

app.listen(port, () => {
  console.log(`This app is running on port ${port}`);
});

const posts = [
  {
    id: 1,
    title: "My first blogpost",
    content: "This is the content for my first blogpost",
  },
  {
    id: 2,
    title: "My second blogpost",
    content: "This is the content for my second blogpost",
  },
  {
    id: 3,
    title: "My second blogpost",
    content: "This is the content for my second blogpost",
  },
];
