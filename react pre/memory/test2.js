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
};

let secondPerson = { ...firstPerson , address : {...firstPerson.address , city:{...firstPerson.address.city}} };

firstPerson.address.country = "USA";

firstPerson.address.city.cityName='Mumbai'

console.log(firstPerson);
console.log(secondPerson);
