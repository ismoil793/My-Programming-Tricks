// ----------------------------------------------- ES6 ----------------------------------------------- //


// ----------------------------------------------- Template String Literals: 'Back ticks'
let word1 = 'Ismoil'
let word2 = 'Shokirov'

const fullName = word1 + word2
const fullNameLiteral = `${word1} ${word2}`

console.log(fullNameLiteral)

// ----------------------------------------------- Object Destructuring
// object destructuring
const personalInfo = {
	firstName: 'Ismoil',
	lastName: 'Shokirov'
}
const {firstName: fn, lastName} = personalInfo
// take firstName from personalInfo as fn

// same can be done with arrays
const [num1,num2,num3] = [1,2,3]
console.log(num2)


// ----------------------------------------------- For of: Loop
const incomes = [420, 600, 700]
const iterableStr = "hello world"

for (let i of incomes){
	console.log(i)
}

// ----------------------------------------------- Spread Operator
const arr1 = [1,32,123,4,5,6]
const arr2 = [...arr1]

// ----------------------------------------------- Rest Operator

function nums(...integers) {
	console.log(integers)
}
nums(1,2,3,4,5,6)


// ----------------------------------------------- Arrow Functions
const arrow = () => {
	console.log("I'm an arrow!")
}

// ----------------------------------------------- Default Parameter
const functionWithDefault = (a = "default") => {
	console.log(a)
}
// ----------------------------------------------- let and const
let example = 0
// ----------------------------------------------- import and export
// export const data = {a: '', b: '123'}


// ----------------------------------------------- Promises

// ----------------------------------------------- ES7 ----------------------------------------------- //


// ----------------------------------------------- padStart and padEnd
const string = "12345"

console.log(string.padStart(10, '.'))
console.log(string.padEnd(10, '.'))

// ----------------------------------------------- Object.values
const obj = {name: 'Ismoil', age: 22}
console.log(Object.values(obj))

// ----------------------------------------------- Object.entries
console.log(Object.entries(obj))


// ----------------------------------------------- ES8 ----------------------------------------------- //


// ----------------------------------------------- Exponential
console.log(Math.pow(2,3))
console.log(2 ** 3)

// ----------------------------------------------- Trailing Commas
const trailing = [1,2,3,4,] // the last comma doen't cause syntax error
console.log([1,,,,5,]) // => 1,undefined, undefined, undefined, 5

// ----------------------------------------------- Async functions


// ----------------------------------------------- ES9 ----------------------------------------------- //

// ----------------------------------------------- Regex