
const myPromiseAll = (promiseList) => {
    const result = [];
    let completedPromises = 0;
    return new Promise((resolve, reject) => {
        promiseList.forEach(promise => {
            promise.then((val) => {
                result.push(val);
                completedPromises += 1;

                if (promiseList.length === completedPromises) {
                    resolve(result)
                }
            })
            .catch(e => reject(e))
        })
    })
}

export const PromiseAll = () => {

    const task = (time) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => time > 500 ? reject("Rejected") : resolve(time), time);
        })
    }

    const promises = [task(500), task(300), task(700)]

    myPromiseAll(promises).then(result => console.log("got", result)).catch(e => console.log("failed", e))

    return <h1>Promise All</h1>
}