const express = require('express');
const app = express();
const path = require('path');
const boardRouter = require('./routes/board')
const calcRouter = require('./routes/calc')

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded());
app.use('/board', boardRouter);
app.use('/calc', calcRouter);

app.listen(4000,()=>{
    console.log('serever on!');
})
