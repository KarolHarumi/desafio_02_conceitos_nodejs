const express = require("express");
const cors = require("cors");

const { uuid } = require("uuidv4");
// yarn dev

const app = express();

app.use(express.json());
app.use(cors());

const repositories = [];
const likes = [];

app.get("/repositories", (request, response) => {
  return response.json(repositories);
});

app.post("/repositories", (request, response) => {
  const {title, url, techs} = request.body;
  const repository = { id: uuid(), title, url, techs }
  
  repositories.push(repository);

  return response.json(repository);
});

app.put("/repositories/:id", (request, response) => {
  const { id } = request.params;
  const { title, url, techs }  = request.body;
  const repositoryIndex = repositories.findIndex(repository => repository.id === id);
  const repository = { title, url, techs };

  if(repositoryIndex < 0) {
    return response.status(404).json({ error: "Repository not found." });
  }

  repositories[repositoryIndex] = repository;

  return response.json(repository);
});

app.delete("/repositories/:id", (request, response) => {
  const { id } = request.params;
  const repositoryIndex = repositories.findIndex(repository => repository.id === id);

  if(repositoryIndex < 0) {
    return response.status(404).json({ error: "Repository not found." });
  }

  repositories.splice(repositoryIndex, 0);

  return response.status(204).send();
});

app.post("/repositories/:id/like", (request, response) => {
  let countLike = 0;
  const { id } = request.params;
  const repositoryIndex = repositories.findIndex(repositoryLikes => repositoryLikes.id === id);
  const repositoryLikes = { id }

  if(repositoryIndex < 0) {
    return response.status(404).json({ error: "Repository not found." });
  }

  likes.push(repositoryLikes);

  var repoLikes = likes.filter((like) => {
    if (like.id === id) return like;
  })

  countLike = repoLikes.length;
  repositoryLikes.likes = countLike;

  return response.json(repositoryLikes);
});

module.exports = app;
