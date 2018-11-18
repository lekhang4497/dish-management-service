const mongoose = require('mongoose');

const dishSchema = new mongoose.Schema({
    name: String,
    price: Number,
    type: String
});

const Dish = mongoose.model('Dish', dishSchema);
export default Dish;