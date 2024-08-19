import { useRef } from "react"
import Modal from "./Modal"


function App() {
  const modal = useRef ()
  
  function modalOpen(){
    modal.current.showModal()
  }
  return (
    <>
     <button onClick={modalOpen}>Open Modal</button>
     <Modal ref={modal}/>
    </>
  )
}

export default App
