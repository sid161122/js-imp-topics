function pizza(crust) {
    return function (sauce) {
        return function (toppings) {
            return `${crust} ${sauce} ${toppings}`
        }
    }

}
const step1 = pizza("thin");
const step2 = step1("tomato");
const step3 = step2("peppers");

console.log(step3)


//It helps us to create a higher-order function(function that makes or uses other function)
function createhero(hero) {  //base - so spiderman is one but powers r many
    return function (power) {
        return function (power1) { 

            return `${hero} ${power1} ${power}`
        }
    }
}

const hero = createhero("spiderman") //reuse
console.log(hero("swing")("skate"))
// console.log(hero("skate"))

//Reusability: Pre-configure parts of a function for specific contexts.
// Modularity: Break functions into smaller, composable pieces.
// Readability: Write cleaner, more expressive code.
// Flexibility: Handle functions with fixed arguments dynamically.
