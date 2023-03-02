const mongoose = require('mongoose')

const bakerySchema = new mongoose.Schema({
    name : {
        type: String,
        required : [true, 'Please enter product name'],
        minLength : [3, 'Must be at least three characters']
    },
    description : {
        type: String,
        required : [true, 'Please enter a description'],
        minLength : [3, 'Must be at least three characters']
    },
    price : {
        type: Number,
        required : [true, 'Please enter product price'],
        min : [1, 'Must be at least one dollar']
    },
    category : {
        type: String,
        required : [true, 'Please enter product category'],
    },
}, {timestamps: true});

//* First argument should be singular and capitalized 
const Bakery = mongoose.model('Bakery', bakerySchema);

module.exports = Bakery;