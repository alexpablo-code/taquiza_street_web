
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://ronyalexis0:taquiza360.@taquiza.pppzvcf.mongodb.net/taquiza?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

    .then(() => console.log('Established a connection to the Database'))
    .catch(err => console.log('Something went wrong when connecting to the database', err))
