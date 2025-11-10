//. What “Synchronous” Means
/*

In JavaScript, synchronous code runs line by line, one statement after another.

Each line must finish executing before the next starts.

The DOM operations (like getElementById, innerHTML, etc.) 
are usually synchronous — they run immediately and block further 
execution until done.


Example (Synchronous DOM operations):

console.log("1");
document.getElementById("demo").textContent = "Hello DOM!";
console.log("2");

*/

//   What “Asynchronous” Means
/*
   Asynchronous means the code does not block other operations.

It allows JavaScript to continue running while waiting for something (like a network response, timer, or event).

The DOM itself doesn’t provide
 asynchronous behavior, but DOM-related tasks often use asynchronous mechanisms — for example,
  updating the DOM after a delay, or when an event occurs



  Example (Asynchronous DOM update):

console.log("Start");

setTimeout(() => {
  document.getElementById("demo").textContent = "Updated asynchronously!";
}, 2000);

console.log("End");




Examples of Asynchronous Behavior That Affect the DOM
Scenario	Description	Example
Event listeners	DOM updates after user actions	button.addEventListener("click", ...)
Timers	Code runs later	setTimeout, setInterval
Network requests	DOM updates after fetch completes	fetch(), XMLHttpRequest
Promises / async–await	Handle data loading before updating DOM	await fetch(...)
Animation frames	Smooth rendering	requestAnimationFrame()
*/
