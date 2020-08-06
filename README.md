# Challenge: Node.js Concepts

A simple API to create and list Repositories.

## Installation

After cloning the repository just install the dependencias with `npm install`.

## Usage

Run `yarn dev` on terminal and acess `http://localhost:3333`

- GET - /repositories

- POST - /repositories
```
{
    "title": "My Repository",
    "url": "http://github.com.br/my_repository",
    "techs": "React, NodeJS, Express"
}
```

- PUT - /repositories/:repositoryId
```
{
    "title": "My Repository",
    "url": "http://github.com.br/my_repository",
    "techs": "React, NodeJS, Express"
}
```

- DELETE - /repositories/:repositoryId

- POST LIKE - /repositories/:repositoryId/like
