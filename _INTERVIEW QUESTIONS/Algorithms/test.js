function flatten(nums) {
    let result = []

    for (let i = 0; i < nums.length; i++) {
        if (Array.isArray(nums[i])) {
            result = result.concat(flatten(nums[i]))
        }
        else {
            result.push(nums[i])
        }
    }

    return result
}

console.log(flatten([[[1, 2]], [[[2]]], 3, [4]]))
