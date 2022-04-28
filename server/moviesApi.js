import { Router } from "express";

const movies = [
  {
    title: "Batman Begins",
  },
  {
    title: "The Dark Knight",
  },
  {
    title: "Dark Knight Rises",
  },
];

export function MoviesApi() {
  const router = new Router();

  router.get("/", (req, res) => {
    res.json(movies);
  });
  router.post("/new", (req, res) => {
    res.sendStatus(500);
  });

  return router;
}
