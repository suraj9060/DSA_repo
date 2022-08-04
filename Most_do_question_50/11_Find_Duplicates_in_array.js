//Given an array A of N elements that contains elements from 1 to N-1. All elements occur once except one which occurs twice. Find the repeating element.

// in array all number present once except 1 number find that number and print
//

let arr = [2, 4, 7, 3, 7]
arr.sort((a, b) => a - b)
console.log(arr)

for (let i = 0; i < arr.length; i++){
    if (arr[i] == arr[i + 1]) {
        console.log(arr[i])
        break;
    }
}

let ans = [...new Set(arr)]
console.log(ans)