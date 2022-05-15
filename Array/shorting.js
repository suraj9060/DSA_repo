let arr = [2, 5, 25, 75, 25, 5, 3, 89, 2, 38, 07, 34, 845, 354, 57, 6976, 456, 34, 56]

// Bubble sort


// function bubbleSort(arr) {
//     for (let i = arr.length; i > 0; i--){
//         let swiped = false;
//         for (let j = 0; j < i - 1; j++){
//             if (arr[j] > arr[j + 1]) {
//                 let temp = arr[j]
//                 arr[j] = arr[j + 1]
//                 arr[j + 1] = temp
//                 swiped = true
//             }
//         }
//         if (!swiped) {
//             break
//         }
//     }
//     return arr
// }

// console.log(bubbleSort(arr))






//Q2---->Selection sort

// function selectionsort(arr) {
//     for (let i = 0; i < arr.length; i++){
//         let min = i;
//         for (let j = i + 1; j < arr.length; j++){
//             if (arr[j] < arr[min]) {
//                 min = j
//             }
//         }
//         let temp = arr[i]
//         arr[i] = arr[min]
//         arr[min] = temp
//     }
//     return arr
// }
// console.log(selectionsort(arr))





// mearge sort

// const mergeSort = (arr) => {
//     if (arr.length < 2) {
//         return arr
//     }
//     const mid = Math.floor(arr.length / 2)
//     const leftSide = arr.slice(0, mid);
//     const rightSide = arr.slice(mid, arr.length)
//     return merge(mergeSort(leftSide) , mergeSort(rightSide))
// }
// function merge(left, right) {
//     //1 create impety array
//     let res = []
//     while (left.length && right.length) {
//         //find lower value
//         if (left[0] <= right[0]) {
//             res.push(left.shift())
//         } else {
//             res.push(right.shift())
//         }
//     }
//     while (left.length) {
//         res.push(left.shift());
//     }
//     while (right.length) {
//         res.push(right.shift());
//     }
//     return res
// }
// let output = mergeSort(arr)
// console.log(output)


// function mergeSort(arr) {
//     if (arr.length < 2) {
//         return arr
//     }

//     let mid = Math.floor(arr.length / 2)
//     let leftPart = arr.slice(0, mid)
//     let rightPart = arr.slice(mid, arr.length)
    
//    return merge(mergeSort(leftPart) , mergeSort(rightPart))
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

// let b = mergeSort(arr)
// console.log(b)

