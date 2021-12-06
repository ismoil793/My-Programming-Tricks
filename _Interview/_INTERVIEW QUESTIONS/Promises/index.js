// ----------------------------------------- #1
let p = new Promise((resolve, reject) => {
	let a = 1 + 1;
	if(a===2) {
		resolve('Success')
	} else {
		reject('Failed')
	}
})

p.then((message) => {
	console.log(message)
}).catch((message) => console.log(message))

// ----------------------------------------- #2 Axios uses Promise.all() behind the scenes

import axios from 'axios';

let one = "https://api.storyblok.com/v1/cdn/stories/health?version=published&token=wANpEQEsMYGOwLxwXQ76Ggtt"
let two = "https://api.storyblok.com/v1/cdn/datasources/?token=wANpEQEsMYGOwLxwXQ76Ggtt"
let three = "https://api.storyblok.com/v1/cdn/stories/vue?version=published&token=wANpEQEsMYGOwLxwXQ76Ggtt"

// Wrong way
const requestOne = axios.get(one);
const requestTwo = axios.get(two);
const requestThree = axios.get(three);

// Correct way
axios.all([requestOne, requestTwo, requestThree])
.then(axios.spread((...responses) => {
	console.log(responses)
}))
.catch(errors => {})


// ----------------------------------------- #3 Promise.all()
const recordVideoOne = new Promise((resolve, reject) => {
  resolve('Video 1 Recorded')
})

const recordVideoTwo = new Promise((resolve, reject) => {
  resolve('Video 2 Recorded')
})

const recordVideoThree = new Promise((resolve, reject) => {
  resolve('Video 3 Recorded')
})

Promise.all([
  recordVideoOne,
  recordVideoTwo,
  recordVideoThree
]).then(messages => {
  console.log(messages)	// ['Video 1 Recorded', 'Video 2 Recorded', 'Video 3 Recorded']
})

Promise.race([	// returns first finished request
  recordVideoOne,
  recordVideoTwo,
  recordVideoThree
]).then(message => {
  console.log(message)	// 'Video 1 Recorded'
})