import React, { useState } from 'react'
import axios from 'axios'


const ProjectForm = (props) => {
	const [title, setTitle] = useState("");
	const [price, setPrice] = useState();
	const [description, setDescription] = useState("");
	const [type, setType] = useState();
	const {projects, setProjects} = props;
	const allTypes = ['Important', 'Critical', 'Low Priority'];

	const onSubmitHandler = e => {
		e.preventDefault();
		axios.post('http://localhost:8000/api/project', {
			title,
			price,
			description, 
			type
		})
			.then( response => {
				// refresh the list 
				setProjects([...projects, response.data]);
				// reset the form
				setTitle("");
				setPrice("");
				setDescription("")
				setType("")
			})
			.catch( err => console.log( err ))
	}

	return (
		<form onSubmit= { onSubmitHandler }>
			<h1>Project Manager</h1>
			<p>
                <label>Title </label>
                <input 
				className="box" 
				type="text" v
				alue={title} 
				onChange = {(e)=>setTitle(e.target.value)} />
            </p>
            <p>
                <label>Price </label>
                <input 
				className="box" 
				type="text" 
				value={price} 
				onChange = {(e)=>setPrice(e.target.value)} />
            </p>
			<p>
                <label>Description </label>
                <input 
				className="box" 
				type="text" 
				value={description} 
				onChange = {(e)=>setDescription(e.target.value)} />
            </p>
			<p>
                <label>Type</label>
                <select 
				name="type" 
				value={type} 
				onChange = {(e)=>setType(e.target.value)}>
					{/* option is needed for default to empty string*/}
					<option value=""></option>
					{ 
						allTypes.map((projectType, index) => (
							<option value={projectType} key={index}>{projectType}</option>
						))
					}
				</select>
            </p>
            <input className="button" type="submit" value="Create"/>
		</form>
	)
}

export default ProjectForm;