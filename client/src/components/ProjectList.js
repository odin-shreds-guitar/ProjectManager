import { Link } from "@reach/router";
import React from "react";

const ProjectList = (props) => {
	return (
		<div class="plist">
			{ props.projects.map((project, index) => {
				return <Link class= "list" to={"/projects/"+ project._id} key={index}>{project.title}</Link>
				})}
		</div>
	)
}

export default ProjectList