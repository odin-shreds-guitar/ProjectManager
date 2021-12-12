import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';
import Delete from './Delete';

const Edit = (props) => {
	const { id } = props;
	const [ title, setTitle ] = useState();
	const [ price, setPrice ] = useState();
	const [ description, setDescription ] = useState();

	// first we get the object to update
	useEffect(() => {
		axios.get('http://localhost:8000/api/projects/' + id )
			.then(res => {
				setTitle(res.data.title)
				setPrice(res.data.price)
				setDescription(res.data.description)
			})
			.catch(err => console.log(err))
	}, [])

	// then we update it
	const updateProject = (e) => {
		e.preventDefault();
		axios.put('http://localhost:8000/api/projects/' + id , {
			title,
			price, 
			description
		})
			.then((res) => {
				console.log("Project updated successfully" + res);
				navigate("http://localhost:3000/projects/" + id)
			}) 
			.catch((err) => console.log("There was an error updating the project" + err))
	}

	// after delete behavior
	const redirectAfterDelete = (e) => {
		// just goes back to the homepage
		navigate("/")
	}

	return (
		<form onSubmit={updateProject}>
		<h1>Project Manager - Update</h1>
		<h2>Currently updating: {title}</h2>
		<p>
			<label>Title </label>
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
		<input className="button" type="submit" value="Update"/>
		< Delete projectId={id} afterDelete={redirectAfterDelete}/>
	</form>
	)
}

export default Edit;