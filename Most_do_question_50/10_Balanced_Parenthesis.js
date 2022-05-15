//balanced Parenthesis

//Given a string S having N characters. Any of the characters of the string are either of '(', '{', '[', ')', '}', ']'. Check whether the pairs and the orders of '{', '}', '(', ')', '[', ']' are correct or not.

let str = '{{[]}}[][][]{}{}'
str = str.split("")

// ans Yes balanced


function balanced(arr) {
    let store = []
    
    for (let i = 0; i < arr.length; i++){
        if (arr[i] == "(" || arr[i] == "{" || arr[i] == "[") {
            store.push(arr[i])
        } else {
            if (arr[i] === ")" && store[store.length - 1] !== "(" || arr[i] === "}" && store[store.length - 1] !== "{" || arr[i] === "]" && store[store.length - 1] !== "[") {
                return "not balanced"
            } else {
                store.pop()
            }
        }
    }

    if (store.length === 0) {
        console.log("balanced")
    } else {
        console.log("Not balanced")
    }
}
balanced(str)
