import { Link } from "@reach/router";
import React from "react";
import axios from 'axios';

const ProjectList = (props) => {
	const {projects, setProjects} = props;

	// delete method
	const deleteProject = (projectId) => {
		axios.delete('http://localhost:8000/api/projects/' + projectId)
			.then(res => {
				//creating new array for refreshing 
				let updatedProjects = projects.filter((project) => {
					return project._id !== res.data._id
					// if (project._id === res.data._id) {
					// 	return false
					// } else {
					// 	return true
					// }
				})
				setProjects( updatedProjects );
			})
			.catch(err => console.log(err))
	}

	return (
		<div class="plist">
					<table>
						<tr>
							<th>Project</th>
							<th>Action</th>
						</tr>
						{ props.projects.map((project, index) => {
						return (
						<tr>
							<td>{<Link class= "list" to={"/projects/"+ project._id} key={index}>{project.title}</Link>}</td>
							<td><button onClick={(e) => {deleteProject(project._id)}}>Delete</button></td>
						</tr>
						)
						})}
					</table>
		</div>
	)
}

export default ProjectList