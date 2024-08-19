import React from 'react'
import Button from './Button'
import img from '../assets/no-projects.png'
const NoProjectSelected = ({showform}) => {
    function addProject(){

        showform()
       }
  return (
    <div className='mt-24 text-center w-2/3'>

        <img src ={img} className='w-16 h-16 object-contain mx-auto'/>
        <h1 className='text-xl font-bold text-stone-500 my-4'>No Project selected</h1>
        <p className='text-stone-400 mb-4'>Select  a Porject or get started with a new one</p>
        <p>
           <Button onClick={addProject}>Create a New Project</Button>
        </p>
    </div>
  )
}

export default NoProjectSelected