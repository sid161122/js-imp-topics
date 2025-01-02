// A function that runs right away when it’s created n keep secrets safe.
//(function....) brackets around it tells i want to use it right away

(function () {
    console.log("I ran right away! 🎉");
  })();// immediately and run whatever is inside.
  
//iife+closure

//Imagine you have a cookie jar 🍪. You bake cookies inside 
// your magic box, but you only let people 
// take cookies—not touch your secret recipe!

const cookieJar = (function(){
    let cookies = 10 //private
    //variables inside a function are sealed inside that function

    return { //return {} creates an object with public tools (functions).
        takeCookie(){ //People can only use the takeCookie method to interact with the cookies.
            //keys
            //These functions can access private variables because of closures.
            if(cookies>0){
                cookies--
                console.log(`${cookies}`)
            }else{
                console.log("no cookies")
            }
        }
    }
})()

cookieJar.takeCookie()

//Why Use IIFE with Closures?
// Encapsulation: Keep your secret recipe (or private data) safe from the outside world.
// Avoid Conflicts: Make sure no one else accidentally messes with your code or variables.
// Run Setup Code Once: If you need to do something only once (like initializing data), the IIFE handles it perfectly.

//Why do closures remember their variables?
//Lexical Scoping means the small box (function) always 
// remembers what’s inside the big box where it was 
// created, no matter where it’s used later.


