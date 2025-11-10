// Dom Document Object Model or document object api

/*
there are five types of

document.getElementsByClassName
document.getElementById
document.getElementsByTagName
document.querySelector
document.querySelectorAll

*/

// document.getelementbyclassName

// document.getElementsByClassName() returns an HTMLCollection, 
// which is live (it updates automatically if the DOM changes).

// To loop through all elements:

// Select all elements with class name "example"
let elements = document.getElementsByClassName("example");

// Access the first element
let firstElement = elements[0];

// Do something with it
firstElement.style.color = "red";


// dom tree

/* DOM Tree Structure

The DOM represents a document as a tree of nodes:

Document → root of the tree.

Elements → HTML tags like <div>, <p>, etc.

Attributes → properties inside tags (class, id).

Text nodes → the content inside tags. */



// Accessing DOM Elements


/*

You can access HTML elements using JavaScript in various ways:

Method	Description	Example
getElementById()	Selects element by ID	document.getElementById("demo")
getElementsByClassName()	Returns HTMLCollection	document.getElementsByClassName("btn")
getElementsByTagName()	Returns HTMLCollection	document.getElementsByTagName("p")
querySelector()	Selects first match using CSS selector	document.querySelector(".item")
querySelectorAll()	Returns all matches (NodeList)	document.querySelectorAll(".item")


*/



// DOM Traversal (Navigating the DOM)
/*

parentNode → moves one level up.

childNodes / children → moves down.

firstChild / lastChild

nextSibling / previousSibling

📘 Example:


let element = document.getElementById("para1");
console.log(element.parentNode);  // parent element
console.log(element.children);    // child elements


*/



 //DOM Manipulation (Changing Content and Structure)

 /*
🧩 Changing Content

element.innerHTML → sets or gets HTML inside an element.

element.textContent → sets or gets text only.



document.getElementById("demo").innerHTML = "<b>Hello DOM!</b>";


🧱 Creating & Adding Elements
let newDiv = document.createElement("div");
newDiv.textContent = "I am new!";
document.body.appendChild(newDiv);




Removing Elements
let element = document.getElementById("demo");
element.remove();



Replacing Elements
let newElem = document.createElement("p");
newElem.textContent = "Replaced text";
oldElem.replaceWith(newElem);




*/



// DOM Attributes

/*
Method	Description
getAttribute(name)	Gets attribute value
setAttribute(name, value)	Sets attribute value
removeAttribute(name)	Removes attribute

document.getElementById("link").setAttribute("href", "https://example.com");


*/



// DOM Events and Event Handling

/*
🎯 Common Events:
Event	Description
click	When clicked
mouseover	Mouse pointer over element
mouseout	Mouse pointer leaves
keydown / keyup	Keyboard events
load	Page fully loaded
submit	Form submitted



🧠 Event Listeners
document.getElementById("btn").addEventListener("click", function() {
  alert("Button clicked!");
});




Removing Listeners

element.removeEventListener("click", myFunction);

*/



// Styling Elements (CSS via DOM)
/*

You can manipulate styles using the style property or classList.

element.style.color = "red";
element.style.backgroundColor = "yellow";




Using classList:
element.classList.add("highlight");
element.classList.remove("hidden");
element.classList.toggle("dark-mode");




*/


 // DOM Forms

 /*

You can access and manipulate form elements:

let name = document.forms["myForm"]["username"].value;



Example:
<form id="loginForm">
  <input type="text" id="user">
</form>


let user = document.getElementById("user").value;


*/