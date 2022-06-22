function isUnique(str) {
    return new Set(str).size === str.length
}

// console.log(isUnique('aAqQWweErRtTYyUuIiOoPp[{]}sSdDFfgGhHjJkKlL;:zZxXcCvVbBnNmM,<.>1234567890'))

function flatten(arr) {
    let res = []
    let flat = []

    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            flat = flatten(arr[i])
            for (let j = 0; j < flat.length; j++) {
                res = [...res, flat[j]]
            }
        } else {
            res = [...res, arr[i]]
        }
    }
    return res
}

// console.log(flatten([[1], [[2, 3]], [[[4]]]]))

function removeDuplicates(str) {
    return [...new Set(str)].join('')
}

// console.log(removeDuplicates('Ismoil Shokirov'))

function getFrequentStr(arr) {
    const map = {}
    let frequentCount = 0
    let frequentStr = ''

    arr.forEach(str => {
        map[str] = 1 + (map[str] || 0)

        if (map[str] > frequentCount) {
            frequentStr = str
            frequentCount = map[str]
        }

    });

    return frequentStr
}

// console.log(getFrequentStr(['abc', 'ghi', 'sde', 'abc', 'a', 'b']));

function isStrRotated(str, rotated) {
    const check = str + str
    return check.length === rotated.length &&
        check.includes(rotated)
}


// console.log(isStrRotated('javascript', 'iptjavascr'));

function hasSubsetArr(arr, subset) {
    if (arr.length < subset.length) {
        return false
    }
    const arrMap = {}
    const subsetMap = {}

    for (let i = 0; i < arr.length; i++) {
        arrMap[arr[i]] = 1 + (arrMap[arr[i]] || 0)
        subsetMap[subset[i]] = 1 + (subsetMap[subset[i]] || 0)
    }

    for (let i = 0; i < subset.length; i++) {
        el = arrMap[subset[i]] || 0
        sourceEl = subsetMap[subset[i]]
        if (sourceEl > el)
            return false
    }
    return true
}

// console.log(hasSubsetArr([1, 2, 3, 4], [4, 1, 0]))

function isAnagram(arr) {
    const sorted = arr.map(str => str.split('').sort().join(''))
    return sorted.every(el => el === arr[0])
}

// console.log(isAnagram(['abcd', 'bdac', 'cabd', 'abcd']))

function rotate90(matrix) {
    const len = matrix.length
    const rotate = matrix.map(_ => [])
    const rotate2 = new Array(len).fill([])

    console.log('rotate', rotate);
    console.log('rotate2', rotate2);

    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            rotate[j][len - 1 - i] = matrix[i][j]
            rotate2[j][len - 1 - i] = matrix[i][j]
        }
    }

    console.log("using map()")
    for (let i = 0; i < len; i++) {
        console.log(rotate[i])
    }
    console.log("using new Array()")
    for (let i = 0; i < len; i++) {
        console.log(rotate2[i])
    }
    return rotate
}

// [
//     [7, 4, 1],
//     [8, 5, 2],
//     [9, 6, 3]
// ]
console.log("--------------")
rotate90([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
])
console.log("--------------")