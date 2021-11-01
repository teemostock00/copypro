const express = require("express")
const mysql = require("mysql")
const dotenv = require('dotenv');

dotenv.config({ path: './.env'})

const app = express();

// mysql 연결
const db = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE
});

// 연결했을때 에러뜨면 콘솔에 띄워야 에러가 확인됨
db.connect( (error) => {
    if(error){
        console.log(error)
    } else{
        console.log("MYSQL Connected.....")
    }
});


// html get방식으로 가져오기
app.get("/", (req, res) => {
    res.send("<h1>Home page</h1>")
});

app.listen(5000, () => {
    console.log("server connected")
});


