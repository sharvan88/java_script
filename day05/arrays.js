//  // ARRAY

// //  arrays are mutable that means we can change the array

// // how to declare a array

// // let arr =["ashish","sharvan","city=delhi"]
// // console.log(arr);

// // arrays are mix type of array that means we can add anything in array ex- function () "string" number, [1,2,2,5]=array
// // k andar array bhi store kar sakte h

// let array=["apple",2,{},[],function(){}, null , undefined]
// console.log(array);

// methood 1 push
/*
push()
Adds element(s) at the end of an array.

// */
// = example

// let arr = [1, 2, 3];
// arr.push(4);
// console.log(arr); // [1, 2, 3, 4]

/* methood 2 = pop
pop()

Removes the last element.

Returns the removed element.

*/
// let arr = [1, 2, 3];
// let removed = arr.pop();
// console.log(removed); // 3
// console.log(arr);     // [1, 2]

/*METHOOD = shift()
shift()

Removes the first element.

Returns the removed element.
// */
// let arr = [10, 20, 30];
// let removed = arr.shift();
// console.log(removed); // 10
// console.log(arr);     // [20, 30]

/* METHOOD =4 unshift()
unshift()

Adds element(s) at the beginning.

Returns the new length.



*/
// let arr = [2, 3];
// arr.unshift(1);
// console.log(arr); // [1, 2, 3]

/*    METHOOD = 5 slice(start, end)
Extracts a part of the array (does not change original).

end is not included.

*/
// let arr = [1, 2, 3, 4, 5];
// console.log(arr.slice(1, 4)); // [2, 3, 4]
// console.log(arr);             // [1, 2, 3, 4, 5]

/* METHOOD 6 = splice(start, deleteCount, ...items)
let arr = [1, 2, 3, 4];
arr.splice(1, 2, 9, 8);  
console.log(arr); // [1, 9, 8, 4]

*/
// let arr = [1, 2, 3, 4];
// arr.splice(1, 2, 9, 8);
// console.log(arr); // [1, 9, 8, 4]

/* methood =7 . indexOf()
Finds the index of the first occurrence.

// Returns -1 if not found.


// */
// // let arr = [10, 20, 30];
// // console.log(arr.indexOf(20)); // 1
// // console.log(arr.indexOf(40)); // -1

// // /* METHHOD 8= includes()
// // Checks if an element exists
// // */

// // let arr = [1, 2, 3];
// // console.log(arr.includes(2)); // true
// // console.log(arr.includes(5)); // false

// // methood=9 concat()
// // Joins arrays (returns new array).

// // let a = [1, 2];
// // let b = [3, 4];
// // console.log(a.concat(b)); // [1, 2, 3, 4]

// // How to merge array

// const name=["aman", "ashish,","sumit"]
// const name2=["rohit","arpit","ajay"]

// methood 1  using push methood
// name.push(name2)
// console.log(name);

//  // methood 2= spread operator

//  constmerge=[...name, ...name2]
//  console.log(constmerge);



