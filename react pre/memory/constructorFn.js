function CreateCar(Name ,Brand , Color ){
       this.name = Name,
       this.brand = Brand,
       this.color = Color

       this.test = function drive(){
              return(`I am Driving ${this.name}`)
       }
}




let car1 = new CreateCar('X6' , 'BMW' , 'Red')

let car2 = new CreateCar('S-class' , 'Mercedes' , 'White')





console.log(car1 , car1.test())

console.log(car2)