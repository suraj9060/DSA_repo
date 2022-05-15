//Design a stack that supports push, pop, top, and retrieving the minimum element in constant O(1) time.

// Note : You need to implement these functions on the stack : push(x) — Push element x into the stack. pop() — Removes the element from top of the stack. top() — Get the top element. getMin() — Retrieve the minimum element in the stack in O(1) time

// push(3);   // input
// push(5);   // output
// push(1);
// getMin();
// pop();
// getMin();

// Output: 1;
// 3;

let arr = [
  ["push", 3],
  ["push", 5],
  ["push", 1],
  ["getmin"],
  ["pop"],
  ["getmin"]
];

let res = []

for (let i = 0; i < arr.length; i++){
//    console.log(arr)
    if (arr[i][0] === "push") {
        res.push(arr[i][1])

    } else if (arr[i][0] === 'pop') {
        res.pop()
    } else {
        // let ans = Math.min(res);
        // console.log(ans)
        let output = null
        for (let j = 0; j < res.length; j++){
            if (res[j] < output || output ===null) {
                output = res[j]
            }
        }
        console.log (output)
    }

    // console.log(res)
}
// console.log(res)
// console.log(arr[3][0])