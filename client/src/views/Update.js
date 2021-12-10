import React, { useEffect, useState } from 'react';
import axios from 'axios';

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
	}

	return (
		<form onSubmit={updateProject}>
		<h1>Project Manager - Update</h1>
		<h2>Currently updating: {title}</h2>
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
		<input className="button" type="submit" value="Update"/>
		<a href={"http://localhost:3000/projects/" + id}><input className="button" value={"Back to " + title}/></a>
	</form>
	)
}

export default Edit;