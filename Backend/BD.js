const mongoose = require('mongoose');
            //mongod para repositorio locales
const URI = 'mongodb+srv://andresb:12345ab@cluster0.cqqrc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
             
             // localhost:27017  //localhost:27017
mongoose.connect(URI)
    .then(db => console.log('Db connect'))
    .catch(err => console.log(err));


module.exports = mongoose;