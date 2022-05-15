// Q1 ----->  find duplicate is array

//input
// let arr = [1,2,3,4,5,3,5,1,4,2,2,1,3,2,4,6,3]
// let arr = "surajkuamkjsdfoijaejoiiosezljsjddlmfvdmvaosejfasdlkajisehrasgerjaerjtaksdhfiaertasdnfcdsoirfsjkjasoief"
// arr = arr.split("")
// console.log(arr)



//1st approach brute force  this is working for same string ans number
// let ans = []

// for (let i = 0; i < arr.length; i++){
//     if (ans.indexOf(arr[i])=== -1) {
//         ans.push(arr[i])
//     }
// }
// console.log(ans)

// 2nd approach brute force
// arr.sort()
// let temp;
// for (let i = 0; i < arr.length; i++){
//     if (arr[i] !== temp) {
//         ans.push(arr[i])
//         temp= arr[i]
//     }
// }
// console.log(ans)



// 3rd method using obj

// let obj = {}
// for (i of arr) {  // important i was using {for in loop} instead of {for of}
//     obj[i]=true
// }
// let b = Object.keys(obj) // this is giving true or false value
// console.log(b)



//4th method using set

// let b = [...new Set(arr)] // in one line very easy

// console.log(b)








// Q2 ---> find how many duplicate exist in the array or string

// let arr = [7,1, 2, 1, 4, 2, 4, 1, 4, 2, 4, 2, 1, 1, 3, 2, 2, 3, 4, 5, 3, 2, 1, 2, 5, 6, 4, 2, 1, 3,5, 6, 4, 2, 2, 4,  6, 4,7]
// arr.sort()
// // console.log(arr)
// // brute force
//  let ans = []

// count = 1;
// for (let i = 0; i < arr.length; i++){
    
//     if (arr[i] === arr[i + 1]) {
//        count ++
//     } else {
//         let val = arr[i] + count
//         ans.push(val)
//         count = 1

//    }
        
// }
// console.log(ans.join(""))



// if arr is unsorted

// let set1 = [... new Set(arr)]

// function check(a, val) {
//     return a.reduce((item, element) => {
//         return (val === element ? item+1 : item)
//     },0)
// }

// let b =[]
// for (let i = 0; i < set1.length; i++){
//     b.push(check(arr, set1[i]))
  
// }

// let ans ={}
// for (let i = 0; i < arr.length; i++){
//     let obj = arr[i]
//     if (!ans[obj]) {
//         ans[obj]=0
//     }
//     ans[obj]++
// }
// console.log(ans)
// let k = Object.keys(ans)
// let l = Object.values(ans)
// console.log(k , l)











