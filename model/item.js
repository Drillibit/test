const mongoose = require('mongoose');
const { Schema } = mongoose;

const itemSchema = new Schema({
    itemName: String,
    itemPriceOne: Number,
    itemPriceOneCount: Number,
    itmePriceTwo: Number,
    itemPriceTwoCount: Number,
    itemPriceThree: Number,
    itemPriceThreeCount: Number,
    itemDescription: String,
    itemImage: String,
    itemGroup: String
});

mongoose.model('items', itemSchema);