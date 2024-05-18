import React, { useState } from 'react'
import Navbar from './componets/Navbar'
import NavBord from './componets/NavBord'

const App = () => {
  const [category,setCategory]=useState("general")
  return (
    <div>
      <Navbar setCategory={setCategory} />
      <NavBord category={category} />
   
    </div>
  )
}

export default App
