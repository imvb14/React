import React,{useRef} from 'react'
import Input from './Input'
import Modal from './Modal'
const NewProject = ({onAdd,cancel}) => {
  const modal  = useRef()
  const titleRef = useRef()
  const desRef = useRef()
  const dateRef = useRef()

  function handleSave(){
    const title = titleRef.current.value;
    const des = desRef.current.value; 
    const date = dateRef.current.value;

    if(title.trim() === '' || des.trim() === '' || date.trim() === ''){
      modal.current.open()
      return
    } 
    onAdd({title,des,date})
  }

  function cancelProject(){
    cancel()
  }
 
  return (
    <>
    <Modal ref={modal}>
      <h2 className='text-xl font-bold text-stone-700 my-4'>Error</h2>
      <p className='text-stone-900 mb-4'> looks like you forgot the enter the value </p>
      </Modal>
    <div className="w-[35rem] mt-16">
        <menu className='flex items-center justify-end gap-4 my-4'>
            <li><button className='text-stone-800 hover:text-stone-950' onClick={cancelProject}>Cancel</button></li>
            <li><button className='px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950' onClick={handleSave}>Save</button></li>
            </menu>
            <div>            <Input  ref={titleRef} label={"Title"}/>
            <Input ref={desRef} label={"Description"} textarea/>
            <Input type='date' ref={dateRef} label={"Due Date"}/>
            </div>  
       
    </div>
    </>
  )
}

export default NewProject