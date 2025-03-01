import express from 'express'
import mongoose from 'mongoose';
import bodyParser from "express"
import userRouter from './routes/user.js'
import recipeRouter from './routes/recipe.js'

const app = express();

app.use(bodyParser.json())


// user router
app.use('/api',userRouter)

// recipe router
app.use('/api',recipeRouter)

mongoose.connect("mongodb+srv://amitkand2003:tZwwPDMa9K8SYrux@cluster0.ha7l7.mongodb.net/",{
    dbName:"MERM_Recipe",
    
}).then(()=>console.log("mongodb is connected")).catch((err)=>console.log(err.message))

 const port = 3000;

app.listen(port,()=>console.log(`server is running on port ${port}`))


// mongodb database aacount
// username = amitkand2003
// password = tZwwPDMa9K8SYrux