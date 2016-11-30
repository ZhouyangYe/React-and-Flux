var mongoose = require('mongoose');

mongoose.connect('mongodb://admin:admin@ds113678.mlab.com:13678/reactproject');

module.exports = mongoose;