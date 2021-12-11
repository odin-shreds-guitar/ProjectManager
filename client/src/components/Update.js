import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Edit = (props) => {
	const { id } = props;
	const [ title, setTitle ] = useState();
	const [ price, setPrice ] = useState();
	const [ description, setDescription ] = useState();
	const [ type, setType ] = useState()
	const allTypes = ['Important', 'Critical', 'Low Priority'];


	// first we get the object to update
	useEffect(() => {
		axios.get('http://localhost:8000/api/projects/' + id )
			.then(res => {
				setTitle(res.data.title)
				setPrice(res.data.price)
				setDescription(res.data.description)
				setType(res.data.type)
			})
			.catch(err => console.log(err))
	}, [])

	// then we update it
	const updateProject = (e) => {
		e.preventDefault();
		axios.put('http://localhost:8000/api/projects/' + id , {
			title,
			price, 
			description,
			type,
		})
			.then(console.log("Updated successfully")) 
			.catch((err) => console.log("There was an error updating the project" + err))
	}

	return (
		<form onSubmit={updateProject}>
		<h1>Project Manager - Update</h1>
		<h2>Currently updating: {title}</h2>
		<p>
			<label>Title </label>
			{/* { errors.title 
				? <span> { errors.title.message } </span>
				: null
			} */}
			<input className="box" type="text" defaultValue={title} onChange = {(e)=>setTitle(e.target.value)} />
		</p>
		<p>
			<label>Price </label>
			<input className="box" type="text" defaultValue={price} onChange = {(e)=>setPrice(e.target.value)} />
		</p>
		<p>
			<label>Description </label>
			<input className="box" type="text" defaultValue={description} onChange = {(e)=>setDescription(e.target.value)} />
		</p>
		<p>
			<label>Type </label>
			<select 
				name="type" 
				value={type} 
				onChange = {(e)=>setType(e.target.value)}>
					{/* option is needed for default to empty string*/}
					{ 
						allTypes.map((projectType, index) => (
							<option value={projectType} key={index}>{projectType}</option>
						))
					}
				</select>
		</p>
		<input className="button" type="submit" value="Update"/>
		<a href={"http://localhost:3000/projects/" + id}><input className="button" defaultValue={"Go Back"}/></a>
	</form>
	)
}

export default Edit;