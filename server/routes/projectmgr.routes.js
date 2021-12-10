const ProjectMgrController = require('../controllers/projectmgr.controller')

module.exports = function(app){
	app.get('/api', ProjectMgrController.index);
	app.post('/api/project', ProjectMgrController.createProject)
	app.get('/api/projects', ProjectMgrController.getAllProjects)
	app.get('/api/projects/:id', ProjectMgrController.getProject)
	app.put('/api/projects/:id', ProjectMgrController.updateProject)
}

