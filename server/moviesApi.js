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

export function MoviesApi(mongoDatabase) {
  const router = new Router();

  router.get("/", async (req, res) => {
    const movies = await mongoDatabase.collection("movies").find().toArray();
    res.json(movies);
  });
  router.post("/new", (req, res) => {
    res.sendStatus(500);
  });

  return router;
}
