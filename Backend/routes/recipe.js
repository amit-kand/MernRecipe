import express from 'express'
import { add, getAllRecipe, getRecipeById } from '../controllers/recipe.js'

const router = express.Router();

// Create Recipe

router.post('/add',add)

//get all Recipe
router.get('/',getAllRecipe)

// get recipe by Id
router.get('/:id',getRecipeById)

export default router;