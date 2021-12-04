const Project = require('../models/projectmgr.model')

module.exports.index = ( request, response ) => {
	response.json({
		message: "Index from controller working as expected"
	})
}

module.exports.createProject = ( request, response ) => {
	const { title, price, description } = request.body;
	Project.create({
		title, 
		price, 
		description
	})
		.then( project => response.json(project))
		.catch( err => response.json(err) )
}

module.exports.getAllProjects = ( request, response ) => {
	Project.find({})
		.then( project => response.json(project))
		.catch( err => response.json(err))
}