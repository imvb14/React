import React from 'react'
import Button from './Button'
import SelectedProject from './SelectedProject'

const SideBar = ({showform,projects,onSelectProject,SelectedProjectid}) => {

   function addProject(){

    showform()
   }
  return (
    <aside className='w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-x'>
        
        <div>
            <h2  className='mb-8 font-bold uppercase md:text-xl text-stone-200'>Your Projects</h2>
        </div>
       <div><Button onClick={addProject}>+Add Project</Button></div>
        <ul className='mt-8'>
            {projects.map((project)=>{
              let cssClasses = 'w-full text-left px-2 py-1 rounded-sm my-1 text-stone-400 hover:text-stone-200 hover:bg-stone-800'

              if(project.id === SelectedProjectid){
                cssClasses += ' bg-stone-800 text-stone-200'
              }else{
                cssClasses += ' text-stone-400'
              }
                return (<li key={project.id} className='my-4'>

                <button className={cssClasses} onClick={()=>onSelectProject(project.id)}>{project.title}</button>
              </li>)
            })}
        </ul>
    </aside>
  )
}

export default SideBar