const mongoose = require('mongoose');
require('../model/item');

const Item = mongoose.model('items');

module.exports = app => {
    app.post('/api/add_item', async (req, res) => {
        const item = new Item({
            itemName: req.body.itemName,
            itemPriceOne: req.body.itemPriceOne,
            itemPriceOneCounter: req.body.itemPriceOneCounter,
            itemPriceTwo: req.body.itemPriceTwo,
            itemPriceTwoCounter: req.body.itemPriceTwoCounter,
            itemPriceThree: req.body.itemPriceThree,
            itemPriceThreeCounter: req.body.itemPriceThreeCounter,
            itemDescription: req.body.itemDescription,
            itemGroup: req.body.itemGroup,
            itemImage: req.body.itemImage
        });
        try {
            await item.save();
            res.send(item);
        } catch (err) {
            res.status(422).send(err);
        }
    });


    app.get('/api/get_items', (req, res) => {
        Item.find({})
            .then(items => {
                res.send(items)
            });
    });

    app.put('/api/edit_item/:id', (req, res) => {
        Item.findById({
            _id: req.params.id
        }).then( item => {
            item.itemGroup = req.body.itemGroup || item.itemGroup,
            item.itemName = req.body.itemName || item.itemName,
            item.itemPriceOne = req.body.itemPriceOne || item.itemPriceOne,
            item.itemPriceOneCounter = req.body.itemPriceOneCounter || item.itemPriceOneCounter,
            item.itemPriceTwo = req.body.itemPriceTwo || item.itemPriceTwo,
            item.itemPriceTwoCounter = req.body.itemPriceTwoCounter || item.itemPriceTwoCounter,
            item.itemPriceThree = req.body.itemPriceThree || item.itemPriceThree,
            item.itemPriceThreeCounter = req.body.itemPriceThreeCounter || item.itemPriceThreeCounter,
            item.itemDescription = req.body.itemDescription || item.itemDescription,
            item.itemImage = req.body.itemImage || item.itemImage
            item.save()
                .then( item => {
                    res.send(item);
                })
        })
    });

    app.delete('/api/remove_item', (req, res) => {
        Item.findById({
            _id: req.params.id
        }).then(() => {
            res.send(req.params.id)
        });
    });
};