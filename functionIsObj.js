function playSound() {
    console.log("Playing a sound!");
}

playSound.volume = 10; // This is a property of the function object

// Now let's see that functions can also have prototypes
console.log(playSound.volume); // 10

// You can also add methods to the prototype
playSound.prototype.stopSound = function () {
    console.log("Sound stopped!");
};

// Create a new sound toy using the function
const mySoundToy = new playSound();

// Now, use the magical powers of the function and its prototype
playSound(); // Output: Playing a sound!
mySoundToy.stopSound(); // Output: Sound stopped!
