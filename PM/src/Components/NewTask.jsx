import React, { useState } from 'react'

const NewTask = ({onAdd}) => {
    const [text, setText] = useState('')
    function inputHandler(e){
        setText(e.target.value )
    }
    function addTask(){
        setText('')
        onAdd(text)
        
    }
  return (
    <div className='flex items-center gap-4'>
        <input type='text' className='w-64 px-2 py-1 rounded-sm bg-stone-200' onChange={inputHandler} value={text}/>
        <button className='text-stone-700 hover:text-red-500' onClick={addTask}> Add Task</button>
    </div>
  )
}

export default NewTask