import React, { useState } from 'react'
import axios from 'axios'


const ProjectForm = (props) => {
	const [title, setTitle] = useState("");
	const [price, setPrice] = useState();
	const [description, setDescription] = useState("");
	const {projects, setProjects} = props;

	const onSubmitHandler = e => {
		e.preventDefault();
		axios.post('http://localhost:8000/api/project', {
			title,
			price,
			description
		})
			.then( response => {
				// refresh the list 
				setProjects([...projects, response.data]);
				// reset the form
				setTitle("");
				setPrice("");
				setDescription("")
			})
			.catch( err => console.log( err ))
	}

	return (
		<form onSubmit= { onSubmitHandler }>
			<h1>Project Manager</h1>
			<p>
                <label>Title </label>
                <input className="box" type="text" value={title} onChange = {(e)=>setTitle(e.target.value)} />
            </p>
            <p>
                <label>Price </label>
                <input className="box" type="text" value={price} onChange = {(e)=>setPrice(e.target.value)} />
            </p>
			<p>
                <label>Description </label>
                <input className="box" type="text" value={description} onChange = {(e)=>setDescription(e.target.value)} />
            </p>
            <input className="button" type="submit" value="Create"/>
		</form>
	)
}

export default ProjectForm;