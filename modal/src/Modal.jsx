import React from 'react'
import { useImperativeHandle } from 'react'
import { forwardRef,useRef } from 'react'
import {createPortal} from 'react-dom'

const Modal = forwardRef((props, ref)=>{

    
  return createPortal(
    <>
        <dialog id="modal" ref={ref}>
            <h2> This is test modal</h2>
            <form method="dialog">
                <button>Close</button>
            </form>    
        </dialog>
        
    </>,
   document.getElementById('modal-root') // Updated to match the new ID
  )
})

export default Modal