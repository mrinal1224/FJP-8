import React, { useState, useEffect } from "react";

import { auth } from "../firebase";

const FireAuth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState("");

  let create = async () => {
    let userCreated = await auth.createUserWithEmailAndPassword(
      email,
      password
    );
    console.log(userCreated);
  };

  useEffect(() => {
    let userSubscribed = auth.onAuthStateChanged((user) => {
      setUser(user);
    });

    return () => {
      userSubscribed(); // cleanUp
    };
  }, []);


  const logout = async ()=>{
          await auth.signOut()
  }

  const login = async ()=>{
       await auth.signInWithEmailAndPassword(email , password)
  }

  return (
    <>
     {

       user ==null?

   
      <div>
        <label>email</label>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={create}>Sign Up</button>

        <button onClick={login}>Log In</button>
      </div> : 
      
      <div> <h1>{user.email}</h1>
             <button onClick={logout}>Log Out</button>
      </div>
}
    </>
  );
};

export default FireAuth;
