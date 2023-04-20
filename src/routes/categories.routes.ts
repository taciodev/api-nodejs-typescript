
import { Router } from "express";
const categoriesRoutes = Router();
import { Category } from "../models/Category";

const categories: Category[] = [];

categoriesRoutes.post("/", (req, res) => {
  const { name, description } = req.body;

  const category = new Category(name, description);

  categories.push(category);

  return res.status(201).json(category);
});

export {
  categoriesRoutes
};