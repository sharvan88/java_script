// right pattern

/*
*
**
***
****
*****
*/

// for (let i = 1; i <= 5; i++) {
//   let row = "";
//   for (let j = 1; j <= i; j++) {
//     row += "*";
//   }
//   console.log(row);

// }

// left triangle
/*   *
    **
   ***
  ****  
*/

// for(let i=1; i<=5; i++){
//   console.log(''.repeat(5- i)+'*'.repeat(i));
  
// }

/*
    pyramid
            * 
          *  *  * 
       *  *  *  *  * 
    *  *  *  *  *  *  * 
 *  *  *  *  *  *  *  *  * 

*/
// loop runs
// spcaes create 
// printing stars

// let rows=5;
// for(let i=1; i<=rows; i++){
//   let spaces ="   ".repeat(rows-i);
//   let stars  =" * ".repeat(2*i-1)
//   console.log(spaces+stars);
  
// }

// // 
/*
 *  *  *  *  *  *  *  *  * 
    *  *  *  *  *  *  * 
       *  *  *  *  * 
          *  *  * 
             * 
         
*/

// let rows=5;
// for(let i=rows; i>=1; i--){
//   let spaces ="   ".repeat(rows-i);
//   let stars  =" * ".repeat(2*i-1);
//   console.log(spaces+stars);
  
// }


// Diamond piramid
/*
     *  *  *  *  *  *  *  *  * 
         *  *  *  *  *  *  * 
           *  *  *  *  * 
             *  *  * 
                * 
                * 
              *  *  * 
           *  *  *  *  * 
        *  *  *  *  *  *  * 
      *  *  *  *  *  *  *  *  * 

*/

let rows=5;
for(let i=1; i<=rows; i++){
  let spaces ='   '.repeat(rows-i);
  let stars  =' * '.repeat(2*i-1);
  console.log(spaces+stars);
  

}

for(let i=rows-1; i>=1; i--){
  let spaces ='   '.repeat(rows-i);
  let stars  =' * '.repeat(2*i-1);
  console.log(spaces+stars);
  
}

