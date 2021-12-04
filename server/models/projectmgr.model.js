const mongoose = require('mongoose');
const ProjectSchema = new mongoose.Schema({
	title : { type: String, required: true},
	price : { type: Number, required: true, min: 0},
	description : { type: String, required: true}
}, { timestamps: true, versionKey: false});
module.exports = mongoose.model('Project', ProjectSchema)