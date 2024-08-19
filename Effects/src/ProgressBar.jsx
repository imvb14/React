import {useState, useEffect} from 'react'

const ProgressBar = ({onConfirm}) => {
  return (
    <div>
        <progress id="progress" value="0" max="100"/>
    </div>
  )
}

export default ProgressBar