import React, { useState } from 'react'
import axios from 'axios'


const ProjectForm = (props) => {
	const { initialTtitle, initialPrice, initialDescription } = props;
	const [title, setTitle] = useState(initialTtitle);
	const [price, setPrice] = useState(initialPrice);
	const [description, setDescription] = useState(initialDescription);
	const {projects, setProjects} = props;
	const allTypes = ['Important', 'Critical', 'Low Priority'];
	const [errors, setErrors] = useState({})

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
				setErrors("")
			})
			.catch( err => {
				console.log( err )
				if (err.response.data.errors){
					setErrors(err.response.data.errors);
				}
			})
	}

	return (
		<form onSubmit= { onSubmitHandler }>
			<h1>Project Manager</h1>
			<p>
                <label>Title </label>
                <input 
				className="box" 
				type="text" 
				value={title} 
				onChange = {(e)=>setTitle(e.target.value)} /> 
            </p>
				{/* validation  */}
				{
					errors.title 
						? <span>{errors.title.message}</span>
						: null
				}
            <p>
                <label>Price </label>
                <input 
				className="box" 
				type="text" 
				value={price} 
				onChange = {(e)=>setPrice(e.target.value)} />
            </p>
				{/* validation  */}
				{
					errors.price 
						? <span>{errors.price.message}</span>
						: null
				}
			<p>
                <label>Description </label>
                <input 
				className="box" 
				type="text" 
				value={description} 
				onChange = {(e)=>setDescription(e.target.value)} />
            </p>
				{/* validation  */}
				{
					errors.description 
						? <span>{errors.description.message}</span>
						: null
				}
            <input className="button" type="submit" value="Create"/>
		</form>
	)
}

export default ProjectForm;