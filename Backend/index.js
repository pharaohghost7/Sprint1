const express = require('express');
const morgan = require('morgan');
const path = require('path');

const {mongoose} =require('./BD.js');




const app = express();

//settings

app.set('port', process.env.PORT || 4000);


//Middlewares

app.use(morgan('dev'));
app.use(express.json());

// Routes

app.use('/api/users', require('./routes/user.routes.js'));

//static files

app.use(express.static(path.join(__dirname, 'public' )));


//Starting Server

app.listen(app.get('port'), ()=> {
    console.log('Server On')
})