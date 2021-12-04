const ProjectMgrController = require('../controllers/projectmgr.controller')

module.exports = function(app){
	app.get('/api', ProjectMgrController.index);
	app.post('/api/project', ProjectMgrController.createProject)
	app.get('/api/projects', ProjectMgrController.getAllProjects)
}

