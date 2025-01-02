//closure is just a function that keeps its memory! 

function bakeCookies() {
    let cookies = 0; //outer variable(local)

    return function addCookie() {
        cookies++; // Add a cookie every time we call this function.
        console.log(`You have ${cookies} cookies now!`);
    };
}

const cookieJar = bakeCookies(); // Create your magical cookie jar.

cookieJar(); // "You have 1 cookies now!"
cookieJar(); // "You have 2 cookies now!"

//Even though you "closed the kitchen" (the bakeCookies function),
// your cookie jar remembers how many cookies you made.



function candyJar(){
    let candy=10

    return{
        takeCandy(){
            if(candy>0){
                candy--
                console.log(`${candy} left`)
            }else{
                console.log("oops, no candy")
            }
        },
        addCandy(amount){
            candy+=amount
            console.log(`You added ${amount} candies. Now u have ${candy}`)
        }
    }
}

const myJar = candyJar(); 

myJar.takeCandy(); // 9 left
myJar.takeCandy(); // 8 left
myJar.addCandy(5); // You added 5 candies. Now you have 13
myJar.takeCandy(); // 12 left


//You can keep your candy safe from anyone else. (Private variables 🎁)
// You can decide how much candy to take or add. (Public methods 🔧)
// Even if you forget about making the jar, your key always works because it remembers the jar! (Closure memory 🧠)

//In the example above, takeCandy() has access to candy because 
// candy was defined inside takeCandy, giving it access to the takeCandy 
// function’s scope.




//"A closure allows a function to access variables from its outer (enclosing) function even after that function has finished executing."
// Your key (closure) always remembers where the chest is, even if you’ve left the room. It can still open the chest to get your stuff!

// "Global variables can be made private within a function using closures, ensuring they cannot be accessed or modified directly from outside."
// Your candy (variable) stays safe in the chest because no one else can open it. Only you have the key to look inside or add more.

// "Closures provide a way to encapsulate private data and create public methods to interact with it."
// You don’t share the candy directly, but you might let someone ask for 1 piece using your key. That’s like creating a "public method" to interact with the private stuff.

// "Closures help retain references to variables that would otherwise be lost after the execution of the outer function."
// Even if you forget about the chest (the function finishes), your key remembers where it is and what’s inside.



//State Management: Keeping Track of Things (remembers)!!!
//Callbacks and Event Listeners: Waiting for a Bell
function recessBell() {
    let snack = "Apple 🍎";

    return function onBellRing() {
      console.log(`Time for recess with your ${snack}!`);
    };
  }
  
  const recessCallback = recessBell();
  recessCallback(); // "Time for recess with your Apple 🍎!"
  //They can ring bells and remember what snack to take!

//Performance Overhead: Too Many Closures
// If you keep creating closures everywhere, it’s like 
// filling your house with too many backpacks. It uses a lot of 
// space and makes things messy.

// How can I avoid issues with this in closures?
// Use arrow functions or manually bind this to ensure it 
// refers to the correct context in a closure.

//"This" is like a name tag that tells everyone who owns the toys.
// Arrow functions are like super glue—they make sure the name tag never falls off!
// Binding this is like taping the name tag to your box—it keeps it stuck in place!

//why we r doing this?Both ways make sure the toys always belong to the right person! 🧸✨

function toyBox() {
    this.toy = "Teddy Bear 🧸";
  
    return function() {
      console.log(`This is my ${this.toy}!`); // Uh oh! "this" might be wrong
    };
  }
  
  const myBox = new toyBox();
  myBox(); // This will be undefined or wrong because "this" gets confused!



//with arrow
  function toyBox() {
    this.toy = "Teddy Bear 🧸";
  
    return () => {
      console.log(`This is my ${this.toy}!`); // "This" points to the right box
    };
  }
  
  const myBox1 = new toyBox();
  myBox1(); // "This is my Teddy Bear 🧸!"
  

//bind
  function toyBox() {
    this.toy = "Teddy Bear 🧸";
  
    return function() {
      console.log(`This is my ${this.toy}!`); // Now "this" is glued
    }.bind(this); // Bind "this" to the toyBox
  }
  
  const myBox2 = new toyBox();
  myBox2(); // "This is my Teddy Bear 🧸!"
  