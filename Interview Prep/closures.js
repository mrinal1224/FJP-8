function greet() {
  let name = "Aman";

  function displayName() {
    console.log("Hi" + " " + name);
    let age = 20;

    function showAge() {
      console.log(name + " " + age);
    }

    return showAge;
  }

  return displayName;
}

let g1 = greet();

console.log(g1());

let g2 = g1()

g2()
