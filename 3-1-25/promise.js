let cookiePromise = new Promise((resolve, reject) => {
    let isCookiesReady = true
    if (isCookiesReady) {
        resolve("ready")
    } else {
        reject("sorry")
    }
})

cookiePromise
    .then((message) => {
        console.log(message)
    })
    .catch((error) => {
        console.log(error)
    })


//adv Promise Methods and Patterns for Effective Async Handling
//promise.all()
let momPromise = new Promise((resolve, reject) => {
    resolve("Chocolate chip cookies 🍪");
  });
  
  let dadPromise = new Promise((resolve, reject) => {
    resolve("Brownies 🍫");
  });
  
  let siblingPromise = new Promise((resolve, reject) => {
    // Change to "reject" to see it fail
    resolve("Cupcakes 🧁");
  });

Promise.all([momPromise,dadPromise,siblingPromise])
.then((treats)=>{
    console.log("yay",treats)
    //yay [ 'Chocolate chip cookies 🍪', 'Brownies 🍫', 'Cupcakes 🧁'  ]
})
.catch((error)=>{
    console.log(error)
})

//If all three deliver treats: You get everything! 🎉
// If one fails: No treats at all. 😢

Promise.allSettled([momPromise, dadPromise, siblingPromise])
  .then((results) => {
    console.log("Here’s the report of everyone’s promises:");
    console.log(results);
  });

//Mom's Promise: ✅ Fulfilled! You know she baked cookies.
// Dad's Promise: ❌ Rejected. He burned the brownies.
// Sibling's Promise: ❌ Rejected. They forgot the cupcakes.
//"I’m not going to get upset. Just tell me who succeeded and who didn’t, so I can decide what to do next." 😊


Promise.race([momPromise, dadPromise, siblingPromise])
  .then((result) => {
    console.log("The first promise to settle:", result);
    // Output: "Brownies 🍫" (Dad finishes first)
  })

//"I don’t care who finishes baking or fails. I’ll just take the first one who delivers something!" 🏁🍪🍫


Promise.any([momPromise, dadPromise, siblingPromise])
  .then((result) => {
    console.log("The first successful treat:", result);
    // Output: "Cupcakes 🧁" (Sibling finishes first)
  })

//"I’ll take the first successful treat and ignore failures. But if everyone fails, tell me so I can be disappointed." 🧁😊


let cookiePromise1 = Promise.resolve("Chocolate chip cookies 🍪");

cookiePromise1.then((result) => {
  console.log("Yay! I got:", result);
  // Output: "Yay! I got: Chocolate chip cookies 🍪"
});

//okn i notice that this op is on 2nd line after ready line why??
//console.log("ready") is synchronous, so it’s executed immediately.
// The Promise.resolve() is asynchronous, so its .then() callback is put in the microtask queue.
// The .then() callback logs Yay! I got: Chocolate chip cookies 🍪 only after the synchronous console.log("ready") completes.

//Promises are handled as microtasks, which are queued to execute after the current synchronous code finishes.
// So, the .then() attached to Promise.resolve() is added to the microtask queue.

//the event loop processes the microtasks, which includes resolving promises and running their .then() handlers.

momPromise
  .then((result) => {
    console.log("Yay! I got:", result);
  })
  .catch((error) => {
    console.log("Oh no:", error);
  })
  .finally(() => {
    console.log("Cleaning the table...");
  });

//"No matter what happens—success or failure—I’ll run this final step, like cleaning up after waiting for the treats." 🎉✨

//8.