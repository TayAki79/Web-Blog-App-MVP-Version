import express from "express";
import bodyParser from "body-parser";

const posts = [];
const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs", { posts });
});

app.post("/posts", (req, res)=>{
  const { title, content } = req.body;
  const newPost = {
    id: Date.now(),
    title,
    content
  };
  posts.push(newPost);
  console.log(posts);
  res.redirect("/");
})

app.listen(port, () => {
  console.log(`This app is running on port ${port}`);
});
