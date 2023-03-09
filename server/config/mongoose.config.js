
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/taquiza_street', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

    .then(() => console.log('Established a connection to the Database'))
    .catch(err => console.log('Something went wrong when connecting to the database', err))
