import Header from "./components/Header"
import Results from "./components/Results"
import UserInputs from "./components/UserInputs"

import { useState } from "react"
function App() {
  const [formData, setFormdata] = useState({
    principal: 12000,
    investment: 1000,
    areturn: 100,
    years: 12,
})

const validInput = formData.years >=1

function changeHandler(name,value) {
   
  
    setFormdata((prevFormData) => ({...prevFormData, [name]: parseInt(value)}))

   
   
}
  return (
    <div>
      <main>
        <Header />
        <UserInputs formHandler={changeHandler} inputData = {formData} />
        {!validInput && <p className="center">Years must be greater than 0</p>}
        {validInput &&<Results inputData = {formData} />}
      </main>
    </div>
  )
}

export default App
