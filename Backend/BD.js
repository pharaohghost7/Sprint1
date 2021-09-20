const mongoose = require('mongoose');
            //mongod para repositorio locales
const URI = '';
             
             // localhost:27017  //localhost:27017
mongoose.connect(URI)
    .then(db => console.log('Db connect'))
    .catch(err => console.log(err));


module.exports = mongoose;
