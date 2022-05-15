// Check for palindrome
// Given a string of length N. Check if the given string is a palindrome without using any built-in functionality.

// What is palindrome
 // this is a array or string which one or there part is same form middle
 // aa b aa is palindrome
 // aa bb aa is palindrome
 // aabba is not a palindrome







// here is solutions

// let str = "malayalam"  // odd length  9
// let str = "abcdeffedcba" // even length  12

//  ans = yes
// let str = "masai"
// ans = no
// str = str.split("")
// let ans = 0
// for (let i = 0; i < str.length; i++) {
//     if (str[i] === str[str.length - 1]) {
//          console.log(str[i], str[str.length - 1]);
//         str.length--
       
//     } else {
//         ans = 1;
//         break;
//     }
 
// }

//  console.log(ans);
//  if (ans === 0) {
//    console.log("palindrome");
//  } else {
//    console.log("Not a palindrome");
//  }
    


// case 2 question can be given is this string can be convert in palindrome or not

// let str = 'kasjdfoiseoj'
//  let str = 'navanaadd'
//  str = str.split("").sort().join("")


// let ans =0
// if (str.length % 2 == 0) {
//     for (let i = 0; i < str.length; i = i + 2) { 
//         if (str[i] !== str[i + 1]) {
//             ans =1
//             break
//         }
//     }
// } else {
//     let count = 0; 
//      for (let i = 0; i < str.length; i = i + 2) {
//          if (str[i] !== str[i + 1]) {
//              count++
//              if (count === 2) {
//                  ans = 1;
//                    break;
//              }
        
//        }
//      }
// }
// if (ans === 0) {
//     console.log("we can make is palindrome")
// } else {
//     console.log("this can not be make palindrome")
// }