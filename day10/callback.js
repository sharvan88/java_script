// Callback in DOM (Real Example)

/*

Callbacks are everywhere in DOM manipulation.

📘 Example:

document.getElementById("btn").addEventListener("click", function() {
  alert("Button clicked!");
});


Here, the anonymous function is a callback
 that runs when the user clicks the button.

*/



//Callback Hell 😵
/*
When you have multiple async tasks that depend on each other, 
callbacks can get nested deeply — this is known as callback hell.

📘 Example:

setTimeout(() => {
  console.log("Step 1");
  setTimeout(() => {
    console.log("Step 2");
    setTimeout(() => {
      console.log("Step 3");
    }, 1000);
  }, 1000);
}, 1000);


Output (after 3 seconds):

Step 1
Step 2
Step 3


🧠 Problem: Hard to read, debug, and maintain.
This is why Promises and async/await were introduced — to avoid
 callback hell.


 */


 // Converting Callback → Promise
/*
📘 Callback Version:

function getData(callback) {
  setTimeout(() => {
    callback("Data received!");
  }, 2000);
}

getData((message) => console.log(message));


📘 Promise Version:

function getData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data received!");
    }, 2000);
  });
}

getData().then(console.log);


✅ The Promise version is cleaner and avoids deep nesting.
*/


 // Error Handling in Callbacks

 /*

In callback functions, errors are often handled using the “error-first” convention.

📘 Example:

function fetchData(callback) {
  let error = false;
  if (!error) {
    callback(null, "Success!");
  } else {
    callback("Error occurred", null);
  }
}

fetchData((err, data) => {
  if (err) console.error(err);
  else console.log(data);
});

*/