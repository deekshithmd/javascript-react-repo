import { useEffect } from "react";

export const PriorityAPIResolution = () => {

    const apis=[
        'https://jsonplaceholder.typicode.com/todos1/1',
        'https://jsonplaceholder.typicode.com/todos/2',
        'https://jsonplaceholder.typicode.com/todos/3',
        'https://jsonplaceholder.typicode.com/todos/4',
        'https://jsonplaceholder.typicode.com/todos/5',
    ]

    const priorityAPIResolution = (apiList) => {
        if (!Array.isArray(apiList) || apiList.length === 0) {
            return Promise.reject(new Error('apiList must be a non-empty array'));
        }


        return new Promise((resolve, reject) => {
            const result = Array.from({ length: apiList.length });
            let settledCount = 0, resolved = false;

            apiList.forEach((api, index) => {
                fetch(api).then(res => {
                    if(res.ok){
                        return res.json();
                    }
                    throw new Error(`HTTP error! status: ${res.status}`);
                }).then(data => {
                    result[index] = { success: true, data }
                }).catch(err => {
                    result[index] = { success: false, err }
                }).finally(() => {
                    settledCount++;
                    checkResolution()
                })

                const checkResolution = () => {
                    if (resolved) {
                        return
                    }
                    for (let i = 0; i < result.length; i++) {
                        const current = result[i];
                        if (current === undefined) {
                            return;
                        }
                        if (current.success) {
                            resolved = true;
                            resolve(current.data);
                            return;
                        }
                    }

                    if (settledCount === apiList.length) {
                        reject('All API calls failed')
                    }
                }

            })
        })
    }

    useEffect(() => {
        priorityAPIResolution(apis).then(data => {
            console.log("data after priority api resolution", data);
        }).catch(err => {
            console.log("err after priority api resolution", err);
        })
    }, [])



    return (
        <div>
            <h1>Priority API Resolution</h1>
        </div>
    )
}