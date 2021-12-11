import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router';

const Delete = (props) => {
	const {projectId, afterDelete} = props;
	
	const deleteHandler = () => {
		console.log(projectId)

		axios.delete('http://localhost:8000/api/projects/' + projectId)		
			.then((res) => {
				console.log("Project " + res.data.title + "successfully deleted")
				afterDelete(projectId)
			})
			.catch((err) => {console.log(err)})
	}
	return (
		<button className="delete-btn" onClick={(e) => deleteHandler()}>
			Delete
		</button>
	)
}

export default Delete;