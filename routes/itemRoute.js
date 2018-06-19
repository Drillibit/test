const mongoose = require('mongoose');
const multer = require('multer');
const fs = require('fs');

require('../model/item');

const Item = mongoose.model('items');

const multerConf = {
    storage: multer.diskStorage({
        destination: (req, file, next) => {
            next(null, './client');
        },
        filename: (req, file, next) => {
            const ext = file.mimetype.split('/')[1];
            next(null, `${file.fieldname}-${Date.now()}.${ext}`);
        }
    })
}

module.exports = app => {
    app.post('/api/add_item', multer(multerConf).single('image') , async (req, res) => {
        const rawImage = fs.readFileSync(req.file.path);
        const encImage = rawImage.toString('base64');
        const item = new Item({
            itemName: req.body.itemName,
            itemPriceOne: req.body.itemPriceOne,
            itemPriceOneCount: req.body.itemPriceOneCount,
            itemPriceTwo: req.body.itemPriceTwo,
            itemPriceTwoCount: req.body.itemPriceTwoCount,
            itemPriceThree: req.body.itemPriceThree,
            itemPriceThreeCount: req.body.itemPriceThreeCount,
            itemDescription: req.body.itemDescription,
            itemGroup: req.body.itemGroup,
            contentType: req.file.mimetype,
            image: Buffer(encImage, 'base64')
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
            item.image = req.body.image || item.image
            item.save()
                .then( item => {
                    res.send(item);
                })
        })
    });

    app.get('/api/items/:id', (req, res) => {
        Item.findOne({
                _id: req.params.id
            })
            .then(item => {
                res.set('Content-Type', item.contentType);
                res.send(item.image);
            });
    });

    app.delete('/api/remove_item', (req, res) => {
        Item.findById({
            _id: req.params.id
        }).then(() => {
            res.send(req.params.id)
        });
    });
};