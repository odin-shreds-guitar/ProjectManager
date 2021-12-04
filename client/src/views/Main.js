import React, { useState, useEffect }from 'react';
import axios from 'axios';
import ProjectForm from '../components/ProjectForm';
import ProjectList from '../components/ProjectList';

const Main = () => {
    const [projects, setProjects] = useState([]);
    useEffect(()=>{
        axios.get('http://localhost:8000/api/projects')
            .then(res => {
                setProjects(res.data);
            });
    },[])
    return (
        <div>
			<ProjectForm />
            <hr/>
            <ProjectList projects={projects}/>
        </div>
    )
}
export default Main;