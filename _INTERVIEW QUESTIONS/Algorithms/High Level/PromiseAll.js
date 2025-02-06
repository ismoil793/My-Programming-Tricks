function promiseAll(promises) {
    const output = []
    let counter = 0

    return new Promise((resolve, reject) => {
        promises.forEach((promise, i) => {
            promise.then(result => {
                output[i] = result
                counter++
                if (counter === promises.length) {
                    resolve(output)
                }
            }).catch(reject)
        })
    })
}

const slowPromise = new Promise((res) => {
    setTimeout(() => {
        res('slow')
    }, 100)
})

const promises = [
    slowPromise,
    Promise.resolve('second'),
    Promise.resolve('last'),
    // Promise.reject('reject')
]

promiseAll(promises).then(console.log).catch(console.log)
