const express = require('express');
const morgan = require('morgan');


const app = express();

//settings

app.set('port', process.env.PORT || 4000);


//Middlewares

app.use(morgan('dev'));
app.use(express.json());



//Starting Server

app.listen(app.get('port'), ()=> {
    console.log('Server On')
})