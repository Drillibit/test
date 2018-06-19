const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://drillbit_dry:AACC220105bk@ds161700.mlab.com:61700/kvk-online-store')
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.log(err));


app.use(bodyParser.json());

//Routes
require('./routes/groupRoute')(app);
require('./routes/itemRoute')(app);

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
    const path = require('path');
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

const PORT = process.env.PORT || 5000;
console.log(`App running at port ${PORT}`);
app.listen(PORT);