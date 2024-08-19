import React from 'react'
import NewTask from './NewTask'

const Task = ({onAdd,tasks}) => {
    console.log(tasks)
  return (
    <div>
      
        <h2 className='text-2xl font-bold text-stone-700 mb-4'> Task </h2>
        <NewTask onAdd={onAdd}/>
        {tasks.length === 0 ? <p className='text-stone-800 my-4'>  This is project doesn't have any task yet</p> : ''}
        <ul>
            { tasks.map((task)=>{
                return( <li className='flex items-center gap-4'>   
                <p className='text-stone-800'>{task}</p>
            </li>)
            }
            )}
        </ul>
    </div>
  )
}

export default Task