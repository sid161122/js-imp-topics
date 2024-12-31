function Car(color){ //constructor function
    // RaceCar.call(this,color) ReferenceError because 
    // it doesn't know what RaceCar is.
    //RaceCar is calling Car, and Car is trying to call RaceCar,
    //  it could lead to a circular reference issue 
    // unless designed properly.
    this.color = color
    this.drive = function(){
        console.log(this.color)
    }
}


function RaceCar(color,speed){
    Car.call(this, color) //explicitly calling the Car()
    this.speed=speed
    this.race =function(){
        console.log(this.color+ this.speed)
    }
}

//create instance
const myCar = new Car('red')
myCar.drive()

const myRaceCar = new RaceCar("blue", 150);
myRaceCar.drive(); 
myRaceCar.race(); 



// issues i ran into :
// 1.
// function RaceCar(color,speed){
//     Car.call(color) /////////-------------ERROR
//     this.speed=speed
//     this.race =function(){
//         console.log(this.color+ this.speed)
//     }
// }

//create instance
// const myCar = new Car('red')
// myCar.drive()

// const myRaceCar = new RaceCar("blue", 150);
// // myRaceCar.drive(); 
// myRaceCar.race();  why Nan ???speed is thereso 150 should be 


// The issue you're encountering with NaN (Not-a-Number) in 
// your myRaceCar.race() method is due to how you're calling the
//  Car constructor and how properties are assigned. Let's break 
// down the code and identify the problems.

// Problem Breakdown
// Calling the Car Constructor: In the RaceCar constructor, 
// you have:


// Car.call(color) // explicitly calling the Car()
// This line attempts to call the Car function but does not 
// bind this properly to the new RaceCar instance. Instead, 
// it should bind this to the RaceCar instance.

// Setting the Color Property: Since you're not using this 
// when calling the Car constructor, the color property is not 
// being set on the RaceCar instance. Instead, it's being set 
// in the context of Car, which doesn't affect the myRaceCar 
// object.

// The Race Method: In the race method, you’re trying to access 
// this.color, but since color was not assigned to the RaceCar 
// instance, this.color is undefined. When you concatenate 
// undefined with a number (like this.speed), JavaScript tries 
// to convert undefined to a number, resulting in NaN.




//2.
//Using Car.call(this, color)
// When you use Car.call(this, color) inside the RaceCar 
// function, you are explicitly calling the Car function and 
// setting this to refer to the instance of RaceCar that is 
// being created. Here’s what happens:

// Inherit Properties: This method allows you to invoke the 
// Car function as if it is being called on the current instance
//  of RaceCar. It means the properties defined in Car (like 
// color) will be assigned to the RaceCar instance.
// No New Object Created: Since you are calling the function 
// directly with .call(), it doesn’t create a new instance of 
// Car. Instead, it assigns the properties directly to the 
// RaceCar instance that is being created.
// Using new Car(color)
// If you were to use new Car(color) inside the RaceCar function,
//  it would create a completely new instance of Car instead of 
// assigning its properties to the current RaceCar instance. 
// Here’s what happens in that case:

// New Instance Created: Calling new Car(color) would create a 
// new object of type Car and assign the color property to that 
// new object.
// Separation of Instances: The new Car instance would be 
// separate from the RaceCar instance, meaning you wouldn’t 
// inherit the properties directly into RaceCar. Instead, you 
// would have two separate objects.

//eg
// function RaceCar(color, speed) {
//     // Here, using new creates a separate Car instance
//     const myCar = new Car(color); // Creates a new Car instance
//     this.color = myCar.color; // This line manually copies color to RaceCar
//     this.speed = speed; // Add speed property to RaceCar
//   }
  
//   const myRaceCar = new RaceCar("blue", 150);
//   console.log(myRaceCar.color); // Output: blue
//   console.log(myRaceCar.speed); // Output: 150



//3.
//function Car(color){ //constructor function
// RaceCar.call(this,color) -----------ERROR
// this.color = color
// this.drive = function(){
//     console.log(this.color)
// }
// } why this will not work

// Issues with This Code
// Undefined RaceCar:

// The RaceCar constructor function needs to be defined 
// before you call it within the Car function. If RaceCar is 
// not defined, JavaScript will throw a ReferenceError because 
// it doesn't know what RaceCar is.
// Incorrect Inheritance Structure:

// If RaceCar is supposed to inherit from Car (or vice versa), you 
// need to structure the inheritance correctly. If RaceCar is a 
// specialized type of Car, then RaceCar should be called as a 
// constructor function inside the Car function, but the logic and 
// relationship should be clearly defined.
// Circular Reference:

//If RaceCar is calling Car, and Car is trying to call RaceCar, it
//could lead to a circular reference issue unless designed 
//properly. Ensure that your constructor functions are set up to 
//reflect the correct relationship (i.e., does Car inherit from 
//RaceCar, or is RaceCar a specialized version of Car?).

