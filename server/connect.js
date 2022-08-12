import mysql from "mysql"
import env from "dotenv"
//ENV
env.config()
//CONECTION DATABASE
const connectMYSQL = mysql.createConnection({
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password:process.env.DB_PASSWORD
})
connectMYSQL.connect((err)=>{
    if(err) console.log('Error: ' + err) //Output error
    console.log('Database connected')
})

export default connectMYSQL;