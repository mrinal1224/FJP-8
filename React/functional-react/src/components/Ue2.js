import React, { useEffect, useState } from 'react'

function Ue2() {

       const [count , setCount] = useState(0)
       const [name , setName] = useState('aman')


       useEffect(()=>{
              document.title = `this is my Title ${count} ${name}`
              console.log('Use Effect')
       } , []) // this works as componentdidmount
       // Dependency array is an array for which the useEffect will work 
  return (
    <div>
           <h1>This is my Counter {count}</h1>
           <button onClick={()=> setCount(count+1)}>+</button>
           <button onClick={()=> setCount(count-1)}>-</button>
           <button onClick={()=>setName('Ankiet')}>ChangeName</button>
           <h1>{name}</h1>
        
    </div>
  )
}

export default Ue2