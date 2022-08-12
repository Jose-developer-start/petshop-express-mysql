import express from "express"
import router from "./routes/roles.js";
import cors from "cors"
import env from "dotenv"
//ENV
env.config()
//APP MAIN 
const app = express();

//Middleware
app.use(express.json())
app.use(cors({origin: "*"}))
//Config
app.set('PORT', process.env.SERVER_PORT)

//Routes
app.use('/api', router)


//Servidor
app.listen(app.get('PORT'), ()=>{
    console.log('Listening server: ', app.get('PORT'))
})