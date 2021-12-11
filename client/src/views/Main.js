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
            {/* trying to pass the setter and getter form line 7 here */}
            {/* passed the getter and setter allowing ProhjectList to see it */}
			<ProjectForm projects={projects} setProjects={setProjects}/>
            <hr/>
            <ProjectList projects={projects} setProjects={setProjects}/>
        </div>
    )
}
export default Main;