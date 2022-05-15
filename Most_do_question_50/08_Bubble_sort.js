// sort the arr using bubble sort

let arr1 = [4, 6, 2, 6, 3, 9, 5, 3, 7, 3]

// for (let i = arr.length - 1; i >= 0; i--){
//     for (let j = 0; j < i; j++){
//         if (arr[j] > arr[j + 1]) {
//             let temp = arr[j]
//             arr[j] = arr[j + 1]
//             arr[j+1] = temp
//         }
//     }
// }
// console.log(arr)



// merge sort



// function mergeSort(arr) {
//     if (arr.length < 2) {
//         return arr;
//     }

//     let mid = Math.floor(arr.length / 2)
    
//     let leftSide = arr.slice(0, mid)
//     let rightSide = arr.slice(mid, arr.length)
    
//     return merge(mergeSort(leftSide) , mergeSort(rightSide))
// }

// function merge(left, right) {
//     let res = []

//     while (left.length && right.length) {
        
//         if (left[0] <= right[0]) {
//             res.push(left.shift())
//         } else {
//             res.push(right.shift())
//         }

//     }

//     while (left.length) {
//         res.push(left.shift())
//     }

//     while (right.length) {
//         res.push(right.shift())
//     }

//     return res
// }

// let ans = mergeSort(arr1)
// console.log(ans)





// for (let i = arr1.length - 1; i >= 0; i--){
//     for (let j = 0; j < i; j++){
//         if(arr1[j] > arr1[j+1]){
//             var temp = arr1[j]
//            arr1[j] = arr1[j+1]
//             arr1[j + 1] = temp
//         }
        
//     }
// }

// console.log(arr1)



// for (let i = arr1.length - 1; i >= 0; i--){
//     for (let j = 0; j < i; j++){
//         if (arr1[j] > arr1[j + 1]) {
//             var temp = arr1[j]
//             arr1[j] = arr1[j + 1]
//             arr1[j+1] = temp
//         }
//     }
// }

// console.log(arr1)