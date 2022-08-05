import React , {useState} from 'react'

import { auth } from '../firebase'

const FireAuth = () => {

       const [email , setEmail] = useState('')
       const [password , setPassword] = useState('')
       const [user , setUser] = useState('')


       const create = async ()=>{
          let userCreated = await auth.createUserWithEmailAndPassword(email , password)
          console.log(userCreated)
       }
  return (
    <div>

       <label>email</label>
       <input type='text' value={email} onChange={(e)=>setEmail(e.target.value)}/>
       <label>password</label>
       <input type='password' value={password} onChange={(e)=>setPassword(e.target.value)}/>

       <button onClick={create}>Sign Up</button>
       <button>Log In</button>
    </div>
  )
}

export default FireAuth