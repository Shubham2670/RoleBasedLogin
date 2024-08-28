import React from 'react'

export const Todos = ({todos , addTodos}) => {
    console.log('child render')
  return (
    <div>
     {todos.map((todos,index)=>{
        return <p key={index}>{todos + index}</p>
     })}
      <button onClick={addTodos}>Add Todos</button>

    </div>
  )
}
