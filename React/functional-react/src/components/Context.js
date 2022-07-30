import React, { useState, useContext } from "react";

let context = React.createContext(null); // using context

function Context() {
  const [fName, setfName] = useState("Tony");
  const [lName, setlName] = useState("Stark");

  return (
    
      <context.Provider value={{fName , lName}}>
        <h3>This is Parent Compoenet</h3>
        <ChildA firstNameA={fName} lastNameA={lName} />
      </context.Provider>

      // Providing Props
   
  );
}

function ChildA() {
  return (
    <>
      <h3>This is child A</h3>

      <ChildB/>
    </>
  );
}

function ChildB() {
  return (
    <>
      <h3>This is child B</h3>
     

      <ChildC />
    </>
  );
}

function ChildC() {
      const {fName , lName}= useContext(context) // Consumimg props with useContext
  return (
    <>
      <h3>This is child C</h3>
      <h1>{fName} {lName}</h1>
      
    </>
  );
}
export default Context;
