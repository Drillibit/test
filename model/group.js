const mongoose = require('mongoose');
const { Schema } = mongoose;

const groupSchema = new Schema({
    groupName: String,
    subGroup: String
});

mongoose.model('groups', groupSchema);