function CreateCar(Name ,Brand , Color ){
       this.name = Name,
       this.brand = Brand,
       this.color = Color

       this.test = function(){
              console.log(`I am Driving ${this.name}`)
       }
}




let car1 = new CreateCar('X6' , 'BMW' , 'Red')

let car2 = new CreateCar('S-class' , 'Mercedes' , 'White')

car2.test()



console.log(car1)

console.log(car2)