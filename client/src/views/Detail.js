import React, { useState, useEffect }from 'react';
import axios from 'axios';

const Detail = (props) => {
    const [project, setProject] = useState({});
    useEffect(()=>{
        axios.get('http://localhost:8000/api/projects/' + props.id)
            .then(res => setProject({
				...res.data
			}));
    },[])
    return (
        <div>
			<p>Project Title: {project.title}</p>
			<p>Project Price: {project.price}</p>
			<p>Project Description: {project.description}</p>
        </div>
    )
}
export default Detail;