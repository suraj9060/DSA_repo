var sortedArr = function (nums, left = 0, right = numbs.length) {
    
    let p = povoits(nums, left, right)
    
    pivot(nums, p +1, right)
    pivot(nums, left , p-1)
}