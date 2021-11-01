const express = require("express");
const path = require('path');
const mysql = require("mysql");
const dotenv = require('dotenv');
const hbs = require('express-handlebars');

dotenv.config({ path: './.env'})

const app = express();

// mysql 연결
// .env에 보안관련된거 싹다 넣고 git에 올리면 됨
const db = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE
});

// 현재 디렉토리 엑세스 (콘솔에 띄워보면 경로뜸)
// public 폴더에 js와 css 공용으로 사용할 수 있음
const publicDirectory = path.join(__dirname, './public');
app.use(express.static)
// console.log(__dirname);

// 핸들바
app.engine( 'hbs', hbs( {
    extname: 'hbs',
    defaultLayout: 'main',
    layoutsDir: __dirname + '/views/layouts/',
    partialsDir: __dirname + '/views/partials/'
} ) );

app.set('view engine', 'hbs');

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
    // res.send("<h1>Home page</h1>")
    res.render("index")
});

app.listen(5000, () => {
    console.log("server connected")
});


