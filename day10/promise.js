// 1. What Is a Promise?
/*
A Promise in JavaScript represents a value that will be available now, later, or never.

It’s used to handle asynchronous operations such as:

Fetching data from an API

Reading files

Waiting for user input or timers

A Promise has three states:

State	Meaning
Pending	The operation is still running
Fulfilled (Resolved)	The operation finished successfully
Rejected	The operation failed

*/

// Creating a Promise
/*
A Promise is created using the new Promise() constructor.


Syntax:

let promise = new Promise(function(resolve, reject) {
  // async operation
  if (success) resolve("Done!");
  else reject("Error!");
});



Example:

let myPromise = new Promise(function(resolve, reject) {
  let success = true;
  setTimeout(() => {
    if (success) resolve("Task completed!");
    else reject("Something went wrong!");
  }, 2000);
});



*/

//3. Using .then(), .catch(), and .finally()

/*
Method	Purpose
.then()	Runs when the promise is fulfilled
.catch()	Runs when the promise is rejected
.finally()	Runs regardless of the outcome

📘 Example:

myPromise
  .then((result) => {
    console.log(result); // "Task completed!"
  })
  .catch((error) => {
    console.error(error); // if rejected
  })
  .finally(() => {
    console.log("Promise settled.");
  });

  */

//5. Promise Error Handling
/*
If an error occurs anywhere in the chain, .catch() will handle it.

📘 Example:

new Promise((resolve, reject) => {
  reject("Error occurred!");
})
.then((value) => console.log(value))
.catch((error) => console.error("Caught:", error));

*/

//Promise Methods (Static Methods)

/*
📍 Promise.all()

Runs multiple promises in parallel and waits for all to finish.

Promise.all([
  Promise.resolve("A"),
  Promise.resolve("B"),
  Promise.resolve("C")
]).then((values) => console.log(values)); // ["A", "B", "C"]


If any promise rejects, the whole thing rejects.

📍 Promise.race()

Returns the first promise (fulfilled or rejected).

Promise.race([
  new Promise(resolve => setTimeout(resolve, 1000, "A")),
  new Promise(resolve => setTimeout(resolve, 500, "B"))
]).then(console.log); // "B"

📍 Promise.allSettled()

Waits for all promises to finish (whether fulfilled or rejected).

Promise.allSettled([
  Promise.resolve("Success"),
  Promise.reject("Fail")
]).then(console.log);


➡ Output:

[
  { status: "fulfilled", value: "Success" },
  { status: "rejected", reason: "Fail" }
]

📍 Promise.any()

Resolves with the first fulfilled promise (ignores rejections).

Promise.any([
  Promise.reject("Error 1"),
  Promise.resolve("Success"),
  Promise.reject("Error 2")
]).then(console.log); // "Success"

🔹 7. Async / Await (Built on Promises)

async and await make working with promises simpler and more readable.

📘 Example:

async function fetchData() {
  try {
    let response = await fetch("https://api.example.com/data");
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error:", error);
  }
}


✅ The await keyword pauses the function until the Promise resolves.


*/

// Real-World Example (API + DOM)
/*
 async function showUser() {
  let res = await fetch("https://jsonplaceholder.typicode.com/users/1");
  let user = await res.json();
  document.getElementById("user").textContent = user.name;
}
showUser();

*/
