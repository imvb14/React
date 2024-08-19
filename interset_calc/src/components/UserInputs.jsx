import {useState} from 'react'

const UserInputs = ({formHandler, inputData,submitHandler}) => {

   
  return (
   
   <section id='user-input' >
        
        <div className='input-group'>
            <p>
        <label htmlFor='principal'>Principal:</label>
        <input type='number' name='principal' value={inputData.principal} onChange={(e)=>formHandler("principal",e.target.value)} required />
        </p>
        <p>        <label  htmlFor='investment'>investment:</label>
        <input type='number' name='investment' value={inputData.investment} onChange={(e)=>formHandler("investment",e.target.value)}/>
        </p>
        </div>
        <div className='input-group'>
        <p>   
        <label htmlFor='return'>Return:</label>
        <input type='number' name='areturn' value={inputData.areturn} onChange={(e)=>formHandler("areturn" ,  e.target.value)} required />
        </p>
        <p>
        <label htmlFor='Years'>Years:</label>
        <input type='number' name='years'value={inputData.years} onChange={(e)=>formHandler("years",e.target.value)} required/>
        </p>
        </div>        
   </section>
  )
}

export default UserInputs