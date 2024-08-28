import React, {  useState } from 'react'
import UsetitleCount from './UsetitleCount'


export const Anothercount = () => {
    const [count , setCount] =useState(0)

    const handleCount=()=>{
        setCount(count+1)
    }

  UsetitleCount(count)

  return (
    <div> 
        <h1>{count}</h1>
      <button onClick={handleCount}>+</button>

    </div>
  )
}