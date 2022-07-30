import React, { useState } from "react";

function Parent() {
  const [fName, setfName] = useState("Tony");
  const [lName, setlName] = useState("Stark");

  return (
    <div>
      <h3>This is Parent Compoenet</h3>
      <ChildA firstNameA={fName} lastNameA={lName} />
    </div>
  );
}

function ChildA({ firstNameA, lastNameA }) {
  return (
    <>
      <h3>This is child A</h3>
      <h1>
        This is A {firstNameA} {lastNameA}
      </h1>

      <ChildB firstNameB={firstNameA} lastNameB={lastNameA} />
    </>
  );
}

function ChildB({ firstNameB, lastNameB }) {
  return (
    <>
      <h3>This is child B</h3>
      <h1>
        This is B componet {firstNameB} {lastNameB}
      </h1>

      <ChildC firstNameC={firstNameB} lastNameC={lastNameB} />
    </>
  );
}

function ChildC({firstNameC , lastNameC}) {
  return (
    <>
      <h3>This is child C</h3>
      <h1>This is component c {firstNameC} {lastNameC}</h1>
    </>
  );
}
export default Parent;
