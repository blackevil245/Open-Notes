var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PostSchema = new Schema({
	title: String,
	ownerId: String,
	content: String,
	submitDate: {
		type: Date,
		default: Date.now
	},
	tag: []
});

module.exports = mongoose.model('post', PostSchema);