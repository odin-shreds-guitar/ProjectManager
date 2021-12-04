import React, { useState } from 'react'
import axios from 'axios'

const ProjectForm = () => {
	const [title, setTitle] = useState("");
	const [price, setPrice] = useState();
	const [description, setDescription] = useState("");

	const onSubmitHandler = e => {
		e.preventDefault();
		axios.post('http://localhost:8000/api/project', {
			title,
			price,
			description
		})
			.then( response => console.log( response ))
			.catch( err => console.log( err ))
	}

	return (
		<form onSubmit= { onSubmitHandler }>
			<p>
                <label>Title </label>
                <input class="box" type="text" onChange = {(e)=>setTitle(e.target.value)}/>
            </p>
            <p>
                <label>Price </label>
                <input class="box" type="text" onChange = {(e)=>setPrice(e.target.value)}/>
            </p>
			<p>
                <label>Description </label>
                <input class="box" type="text" onChange = {(e)=>setDescription(e.target.value)}/>
            </p>
            <input class="button" type="submit" value="Create"/>
		</form>
	)
}

export default ProjectForm;
