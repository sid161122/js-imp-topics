let tv = "in living room"

function yourRoom() {
    let toys = "in your room"; // Only you can see your toys
    console.log(toys); // Works: You’re in your room!
    console.log(tv); // Works: You can still see the TV from your room
}

function kitchen() {
    if (true) {
        let cookie = "in the fridge"; // Only in the kitchen
        console.log(cookie); // Works: You’re in the kitchen
    }
    // console.log(cookie); // Error: You left the kitchen, no cookie!
}


yourRoom();
kitchen()
// console.log(toys); // Error: Toys are only in your room
console.log(tv); // Works: The TV is in the living room

//Keeps things organized

