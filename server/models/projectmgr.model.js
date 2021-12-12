const mongoose = require('mongoose');
const ProjectSchema = new mongoose.Schema({
	title : { type: String, required: [true, "No title? Cmon, fool. Title cannot be empty"]},
	price : { type: Number, required: [true, "Everything has a price. Price must be more than 0"], min: 0},
	description : { type: String, required: [true, "You need to give me something more here. A description is required."]},
}, { timestamps: true, versionKey: false});
module.exports = mongoose.model('Project', ProjectSchema)