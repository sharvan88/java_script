// // // how to declare a object

// // // const user={
// // //     name:"ashish",
// // //     age:19,
// // //     city:"delhi", 
// // // }
// // // console.log(user)

// // // // in this methood first we declare variable than we will {} declare our keys than we will
// // // // console.log()


// // // access
// // // first dot notaion
// // // // we can acces direct a perticular key
// // // console.log(user.name);
// // // console.log(user.age);
// // // // console.log(user.city);


// // // square bracket notation methood
// // // console.log(user["name"]); // in this methood we can acces by using bracket []notation

// // // how to add new key
// // // user.ismarried=false
// // // user.age=23
// // // console.log(user);


// // // second methood

// const snapuser=new Object();
// console.log(snapuser);

// snapuser.name= "ashish";
// snapuser.age= 22;
// snapuser.followers="25k";
// console.log(snapuser);



// // // now we will learn more topics 
// //  //  no 1= freesze methood

// //  Object.freeze(snapuser)
// //  // now i we will try to update and add new key it will not allow

// //  snapuser.id="da4259" // cannot create a new key
// //  snapuser.age=50 // cannot update any key or value
// //  console.log(snapuser);
 

// //  // no 2 = seal
// //  Object.seal(snapuser)//
// //  snapuser.id="da4259"// here we can not create a new key
// //  snapuser.age=55 // it can update the value
// //  console.log(snapuser);

// //  //no 3 = object.keys
// //  console.log(Object.keys(snapuser));
// //  // no 4 = values 
// //  console.log(Object.value(snapuser));
// //  // no 5 enteries

// //  console.log(Object.entries(snapuser));

// //  // no 6 = has own property it wil check is any value exist if not it will retutn falsed if exist so true
//  console.log(Object.hasownProperty('name'));
 
  
 
 
 // How to merge objects 

//  const obj1={
//     a: 3,
//     b: 5,


//  }
//  const obj2={
//     d: 11,
//     e: 10,


//  }


 // methood 1
//  const mergeobj=Object.assign({},obj1, obj2);
//  console.log(mergeobj);
 
// Methood 2 
// const mergeobj={...obj1, ...obj2};
// console.log(mergeobj);


// object distructing

const fullstack={
    fullstacktrainer: "ashish",
};

// methood 1
// const{fullstacktrainer:trainer}=fullstack
// console.log(trainer);

console.log(fullstack.fullstacktrainer);
