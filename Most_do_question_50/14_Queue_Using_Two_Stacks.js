//Implement a Queue using 2 stacks s1 and s2 . A Query Q is of 2 Types (i) 1 x (a query of this type means pushing 'x' into the queue) (ii) 2 (a query of this type means to pop element from queue and print the poped element)

let  n =5
let arr = [1, 2, 1, 3, 2, 1, 4, 2];
let que = [];
let ans = [];
for (let i = 0; i < n; i++){
    if (arr[i] === 1) {
        que.push(arr[i + 1])
        i = i+2
    }
    else {
        ans.push(que.shift())
    }
}
console.log(ans)