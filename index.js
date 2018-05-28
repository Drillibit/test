const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('kvk-front/build'));
    const path = require('path');
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'kvk-front', 'build', 'index.html'));
    });
}

const PORT = process.env.PORT || 5000;
console.log(`App running at port ${PORT}`);
app.listen(PORT);