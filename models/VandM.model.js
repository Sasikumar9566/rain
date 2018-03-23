var mongoose = require('mongoose');
var Schema = mongoose.Schema;



var VsandMs = new Schema({
    vision: String,
    mission: String,
    updated: String,
    updatedon: {type: Date, default: Date.now()}
});

module.exports = mongoose.model('v-and-m', VsandMs);
