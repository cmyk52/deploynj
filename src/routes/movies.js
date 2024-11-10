import { Router } from "express";
import { MovieController } from "../controller/movies.js";
import { MovieModel } from "../models/movie.js";

export const router = Router();

router.get("/", MovieController.getAll)


router.get("/:id", MovieController.getByid)

router.post("/", MovieController.post)

router.patch("/:id", MovieController.patch)

router.delete("/:id", MovieController.delete)