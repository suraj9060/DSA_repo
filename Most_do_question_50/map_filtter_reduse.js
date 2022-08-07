// //for normal map function

let arr = [1, 2, 3, 4 ,2]

// let map1 = arr.map(e => e * 2)
// console.log(map1)


// // polyfill of map or making function of map by our self

// Array.prototype.mymap = function (cb) {
//    let temp = []
//     for (let i = 0; i < this.length; i++){
//         temp.push(cb(this[i] , i , this))
//     }
//     return temp
// }

// let map2 = arr.mymap(e => e * 2)
// console.log(map2)


// // filter normal approch

// let filter1 = arr.filter(e => e > 2)
// console.log(filter1)
// //polyfill for filter

// Array.prototype.myFilter = function (cb) {
//     let temp = []
//     for (let i = 0; i < this.length; i++){
//         if (cb(this[i], i, this)) temp.push(this[i])
//     }
//     return temp
// }


// let filter2 = arr.myFilter(e => e > 2)
// console.log(filter2)
// // reduse method

// //reduce(acc , current value , index , array)
// let sum = arr.reduce((acc, ele) => {
//     return acc + ele
// }, 0)
// console.log(sum)
// // polyfill for value

// Array.prototype.myReduce = function (cb, initalValue) {
//     let acc = initalValue
   
//     for (let i = 0; i < this.length; i++){
//         acc = acc ? cb(acc , this[i] , i , this) : this[i]
//     }
//     return acc
// }

// let sum2 = arr.myReduce((acc, ele) => {
//     return acc + ele
// })
// console.log(sum2)

// Array.prototype.myreduce = function (cb , initialValue) {
//     let acc = initialValue

//     for (let i = 0; i < this.length; i++){
//         acc = acc ? cb(acc , this[i] , i , this) : this[i]
//     }

//     return acc
// }

// let outptu = arr.myreduce((acc, initialvalue)=> acc+initialvalue)
// console.log(outptu)









// let map1 = arr.map(e => e * 2)
// console.log(map1)


// // polyfill of map or making function of map by our self

// Array.prototype.mymap = function (cb) {
//    let temp = []
//     for (let i = 0; i < this.length; i++){
//         temp.push(cb(this[i] , i , this))
//     }
//     return temp
// }

// let map2 = arr.mymap(e => e * 2)
// console.log(map2)


// // filter normal approch

// let filter1 = arr.filter(e => e > 2)
// console.log(filter1)
// //polyfill for filter

// Array.prototype.myFilter = function (cb) {
//     let temp = []
//     for (let i = 0; i < this.length; i++){
//         if (cb(this[i], i, this)) temp.push(this[i])
//     }
//     return temp
// }


// let filter2 = arr.myFilter(e => e > 2)
// console.log(filter2)
// // reduse method

// //reduce(acc , current value , index , array)
// let sum = arr.reduce((acc, ele) => {
//     return acc + ele
// }, 0)
// console.log(sum)
// // polyfill for value

// Array.prototype.myReduce = function (cb, initalValue) {
//     let acc = initalValue
   
//     for (let i = 0; i < this.length; i++){
//         acc = acc ? cb(acc , this[i] , i , this) : this[i]
//     }
//     return acc
// }

// let sum2 = arr.myReduce((acc, ele) => {
//     return acc + ele
// })
// console.log(sum2)

// Array.prototype.myreduce = function (cb , initialValue) {
//     let acc = initialValue

//     for (let i = 0; i < this.length; i++){
//         acc = acc ? cb(acc , this[i] , i , this) : this[i]
//     }

//     return acc
// }

// let outptu = arr.myreduce((acc, initialvalue)=> acc+initialvalue)
// console.log(outptu)
