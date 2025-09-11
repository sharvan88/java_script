// // // // // // // // // // today we will learn string
// // strings are inmutable
// // // // // // // // // // methood 1
// // // // // // // // // // let str1= "java_script"
// // // // // // // // // // console.log(str1);

// // // // // // // // // // methood 2
// // // // // // // // // let str2= 'jAVA'
// // // // // // // // // console.log(str2);


// // // // // // // // // methood 3
// // // // // // // // let name ="ashish";
// // // // // // // // let age ="15";
// // // // // // // // let city= "new delhi";
// // // // // // // // console.log("my name is \n " + name," \n my age is\n " +age ," \n my city is \n"+city);

// // // // // // // // // let str3='hello ${name}, welcome';


// // // // // // // // Methood 4 = access character

// // // // // // // let text = "JavaScript";
// // // // // // // console.log(text.length); // 10
// // // // // // // console.log(text[0]);
// // // // // // // console.log(text[1]);
// // // // // // // console.log(text[2]);
// // // // // // // console.log(text[3]);
// // // // // // // console.log(text[4]);
// // // // // // // console.log(text[5]);
// // // // // // // console.log(text[6]);
// // // // // // // console.log(text[7]);
// // // // // // // console.log(text[8]);
// // // // // // // console.log(text[9]);
// // // // // // // console.log(text[10]);

// // // // // // // // copy shortcuts 
// // // // // // // // shift+ alt + down arrow key


// // // // // // // methood 5 = String constructor (new String()) – creates a string object (not commonly used)
// // // // // // let str4 = new String("Hello World");
// // // // // // console.log(str4);




// // // // // // //  output =[string: 'hello world']

// // // // // // methood 6 = changing case
// // // // // let str="hello"
// // // // // console.log(str.toUpperCase()); // HELLO
// // // // // console.log(str.toLowerCase()); // hello

// // // // // methood 7 = searching m string k no ko search kia jata h
// // // // let str="ashish"
// // // // console.log(str.indexOf("h"));// 2 ayega kyunki index [0,1,2,3,,4,5]ese chalta h
// // // //                                //                      [a,s,h,i,s,h]


// // // // more types
// // // let str="ashish"
// //// console.log(str.charAt(5))
// // // console.log(str.indexOf("a"));    // 1
// // // console.log(str.lastIndexOf("2")); // 3
// // // console.log(str.includes("se"));   // true
// // // console.log(str.startsWith("ad")); // true usme ad h to true karega 
// // // console.log(str.endsWith("op"));   // true agar op nahi h toh false return karega


// // // methood 8 = extracting
// // let str="harsh"
// // console.log(str.slice(1, 4));     // esme 1=h or 4 =h ko ignore karega
// // console.log(str.substring(2, 4)); // esme ha=2 ko ignore karega or last m s=4 means 4th no ko ignore karega
// // console.log(str.substr(1,3));    // esme 1 index par=a se le kar 3rd index=s yha tk k bech ko print karega


// //  Methood 9 4. Template Literals
// let item="book";
// let price = 200;
// console.log(`The ${item} costs ₹${price}`);
// // The Book costs ₹200


// const url ="sqdihd jdjkaj jjjsa mjga"
// console.log(url.replace("a", " ")); // so here it will replace a with backspace
// console.log(url.replaceAll("a"," "));// it will replace a or sab m backspace ko add karega




let str ="                ja    va          "
// console.log(str.lenght);

console.log(str.trim().length);// word ex ja & va k beech k space ko conut karega outwise ignore karega 
