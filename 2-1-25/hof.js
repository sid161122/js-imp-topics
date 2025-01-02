function higherOrderFunction(callback) {
    console.log("magic")
    callback()
    console.log("finish")
}

function callbackFunction() {  //instructions

    console.log("callback is executed")
}

higherOrderFunction(callbackFunction)

//The magic box (higher-order function) only knows how to read 
//and follow instructions (callback function).


// Higher-Order Function
function doTask(taskName, callback) { 
// Manages the task and calls the callback after it finishes.
    
    console.log(`Starting the task: ${taskName}`);
    setTimeout(() => {
        console.log(`Finished the task: ${taskName}`);
        callback(); // This is the callback being executed
    }, 2000);
}

// Callback Function
function celebrate() { //Says what to do when the task is done.
    console.log("Yay! Task is complete! 🎉");
}

// Using the Higher-Order Function
doTask("cleaning the room", celebrate);


// Why Use HOF + Callback?
// You can use the same doTask function for any task by just 
// changing the callback. It’s flexible and reusable.