import React, { useState } from 'react'
import { Todos } from './Todos'

export const UseCallback = () => {
  const [count ,setCount] =useState(0)
  const [todos , setTodos]= useState([])


  const handleclick=()=>{
    setCount(count+1)
  }

  const handleclicktodo=()=>{
    setTodos((prev)=> [...prev, `new Entry`])
  }


  return (
    <div>
        Count :{count}
     <button onClick={handleclick}>Inc</button>
    

     <Todos todos={todos} addTodos={handleclicktodo} />

    </div>
  )
}
