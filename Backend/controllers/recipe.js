import { Recipe } from "../Models/Recipe.js";
 export const add = async(req,res)=>{
    const {title,ist,ing1,ing2,ing3,ing4,qty1,qty2,qty3,qty4,imgurl} = req.body;

    try{
        const recipe= await Recipe.create({
            title,ist,ing1,ing2,ing3,ing4,qty1,qty2,qty3,qty4,imgurl,user:"67c2c20e567fda5de35f88d2"});
            res.json({message:"Recipe created succefully .. !",recipe})
        
    } catch(error) {
        res.json({message:error})

    }
 }

 export const getAllRecipe = async(req,res)=>{
    const recipe = await Recipe.find();
    res.json({recipe})
 }

 export const getRecipeById = async(req,res)=>{
    const id = req.params.id

    try{
        let recipe = await Recipe.findById(id)

        if(!recipe) res.json({message:"Recipe not exist .. "})

        res.json({message:"Recipe by id",recipe})
    } catch(error){
        res.json({message:error})

    }
 }