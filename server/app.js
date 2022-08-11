import express from "express"
import mysql from "mysql"


//APP MAIN 
const app = express();
//CONECTION DATABASE
const MYSQL = mysql.createConnection({
    host: 'localhost',
    database: 'petshop',
    user: 'root',
    'password': ''
})
let connectMySQL = MYSQL.connect((err)=>{
    if(err) console.log('Error: ' + err) //Output error
    console.log('Database connected')
})
//En desarrollo
MYSQL.query('SELECT * FROM roles', (err,results)=>{
    if(err) console.log('Error ' + err)

    console.log(results)
})

//END DEV

//Config
app.set('PORT', 5000 || process.env.PORT)




//Servidor
app.listen(app.get('PORT'), ()=>{
    console.log('Listening server: ', app.get('PORT'))
})