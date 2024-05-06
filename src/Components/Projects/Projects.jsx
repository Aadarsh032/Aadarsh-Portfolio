import React from 'react'
import './Projects.css'
import projects from '../../assets/projects'

const Projects = () => {
  return (
    <div className='projects' id='Projects' >
        <div className='projects-title'>
            <h1>My Projects</h1>
           
        </div>
        <div className='project-contents'>{
          projects.map((item,index)=>{
             
            return (<div key={index} className='project-box'>
            <a href={item.w_link} target="_blank" className='project-link' > <img src={item.w_img} alt="" className='project-img'/></a> 
                <h2 className='project-name'>{item.w_name}</h2>     
            </div>) 
          })
        }</div>

    </div>
  )
}

export default Projects