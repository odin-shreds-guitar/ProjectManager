import { Link } from "@reach/router";
import React from "react";
import Delete from "./Delete";

const ProjectList = (props) => {
	const {projects, setProjects} = props;


	const updateListAfterDelete = (deletedProject) => {
		// creating a new array
		let filteredProjects = projects.filter((project) => {
			return project._id !== deletedProject
			// if (project._id === deletedProject) {
			// 	return false
			// } else {
			// 	return true
			// }
		});
		setProjects(filteredProjects)
	}

	return (
		<div className="plist">
					<table>
						<thead>
							<tr>
								<th>Project</th>
								<th>Action</th>
							</tr>
						</thead>
						{ props.projects.map((project, index) => {
						return (
						<tbody>
							<tr>
								<td>{<Link className="list" to={"/projects/"+ project._id} key={index}>{project.title}</Link>}</td>
								< Delete projectId={project._id} afterDelete={updateListAfterDelete}/>
							</tr>
						</tbody>
						)
						})}
					</table>
		</div>
	)
}

export default ProjectList