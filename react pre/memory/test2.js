let firstPerson = {
  name: "Adam",
  age: 23,
  address: {
    country: "India",
    city: {
      cityName: "Delhi",
      pincode: 123456,
    },
  },

  test: {
    value1: 2,
  },
};

let secondPerson = { ...firstPerson }; // shallow copy

// firstPerson.address.country = "USA";

// firstPerson.address.city.cityName='Mumbai'

let thirdPerson = JSON.parse(JSON.stringify(firstPerson)); // deep copy

firstPerson.address.city.pincode = "56789";

console.log(firstPerson);
console.log(secondPerson);
console.log(thirdPerson);
