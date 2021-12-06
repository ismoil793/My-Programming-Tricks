// const lengthOfLongestSubstring = function (s) {
//     let start = 0, maxLen = 0;
//     const map = new Map();

//     for (let i = 0; i < s.length; i++) {
//         const ch = s[i];

//         if (map.get(ch) >= start) start = map.get(ch) + 1;
//         map.set(ch, i);

//         maxLen = Math.max(maxLen, i - start + 1);
//     }

//     return maxLen;
// };

// console.log(lengthOfLongestSubstring("asddqwerty"))

let obj = {
    method1() {
        console.log(this)
    },
    method2: () => {
        console.log(this)
    },
    method3: () => {
        let func = () => console.log(this)
        func()
    },
    method4() {
        let func = () => console.log(this)
        func()
    }
}

// obj.method1()
// obj.method2()
// obj.method3()
// obj.method4()

let sum = (...arr) => {
    return arr.reduce((acc, cur) => acc + cur)
}

let sum2 = function () {
    const arr = [...new Map(Object.entries(arguments)).values()]
    return arr.reduce((a, c) => a + c)
}

const res = sum(1, 2, 3, 4, 5, 6, 7, 8, 9)

// console.log(res)

//----------------------------------------------------------------Promise
