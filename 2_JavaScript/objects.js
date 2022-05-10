 // Objects - in JS an object is a collection data in key value pair

//  let person = {
//         name : 'Mrinal',
//         age: 23,
//         gender : 'Male'


//  } // declaration

//  let car={
//         model : 'BMW',
//         color : 'Red',
//         topSpeed : '300km/hr',
//         price : '2500000 Rs'
       
//  }


 let captainAmerica ={
         name : 'Steve Rogers',
         age : 102,
         friends : ['Bucky' , 'Banner' , 'Thor' , 'Tony'],
         address : {
                Country : 'USA',
                state : 'New York',
                city : {
                       cityName : 'Manhatton',
                       pincode : 123456,
                       
                }
         },

         isAvenger : true

 }


 // Accessing properties of an Object-

 // dot Notation (.)

 let ageOfCaptain = captainAmerica.age
 console.log(ageOfCaptain) // 102

 let friendsOfCaptian = captainAmerica.friends[2]
 console.log(friendsOfCaptian) // Thor

 let cityOfCaptain = captainAmerica.address.city.cityName
 console.log(cityOfCaptain)

 captainAmerica.isAvenger=false


 captainAmerica.movies = ['first avenger' , 'civil war' , 'EndGame']

 delete captainAmerica.age // delete a key

 captainAmerica.friends.push('Natasha')

 console.log(captainAmerica)







