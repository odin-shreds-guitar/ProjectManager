import React, { useState, useEffect }from 'react';
import axios from 'axios';
import Delete from './Delete';

const Detail = (props) => {
    const [project, setProject] = useState({});

    useEffect(()=>{
        axios.get('http://localhost:8000/api/projects/' + props.id)
            .then(res => setProject({
				...res.data
			}));
    },[])

	// delete function 
	const deleteProject = (props) => {
		axios.delete('http://localhost:8000/api/projects/' + props.id)
			.then(res => {
				// we confirm response and go back to main view
				console.log(res.data.title + " deleted successfully")
			})
			.catch(err => console.log(err))
	}

    return (
        <form >
		<h1>Project Manager</h1>
		<h2>Currently viewing: {project.title}</h2>
		<p>
			<label>Title </label>
			<span className="box">{project.title} </span>
		</p>
		<p>
			<label>Price </label>
			<span className="box">{project.price} </span>
		</p>
		<p>
			<label>Description </label>
			<span className="box">{project.description}</span>
		</p>
		<a href={"http://localhost:3000/projects/" + project._id + "/edit"}><input className="button" defaultValue={"Edit"}/></a>
		<a href={"http://localhost:3000/"}><input className="button" defaultValue={"Back to Home"}/></a>
	</form>
    )
}
export default Detail;