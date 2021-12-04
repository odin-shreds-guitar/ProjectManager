import React from "react";

const ProjectList = (props) => {
	return (
		<div class="plist">
			{ props.projects.map((project, index) => {
				return <p class= "list" key={index}>{project.title}</p>
			})}
		</div>
	)
}

export default ProjectList