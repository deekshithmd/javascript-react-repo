import React, { useState } from "react"

export const Debouncing = () => {
    const [data, setData] = useState('')

    // const debouncing = (fn, time) => {
    //     let id = 0;
    //     return function () {
    //         const context = this;
    //         const args = arguments;
    //         clearTimeout(id);
    //         id = setTimeout(() => fn.apply(context, args), time)
    //     }
    // }

    const debouncing = (fn, delay, options = {}) => {
        let timerId = null;
        const { leading = false, trailing = true } = options;
        let lastArgs, lastThis;


        function debounce(...args) {
            lastThis = this;
            lastArgs = args;

            if (timerId) {
                clearTimeout(timerId)
            }

            if (leading && !timerId) {
                fn.apply(lastThis, lastArgs)
            }

            timerId = setTimeout(() => {
                if (trailing) {
                    fn.apply(lastThis, lastArgs)
                }
                timerId = null;
            }, delay);
        }

        debounce.cancel = function () {
            if (timerId) {
                clearTimeout(timerId);
                timerId = null
            }
        }

        debounce.flush = function () {
            if (timerId) {
                clearTimeout(timerId)
                fn.apply(lastThis, lastArgs)
                timerId = null;
            }
        }

        return debounce
    }

    const handleChange = (e) => {
        console.log("value", e.target.value)
        setData(e.target.value)
    }

    const debounce = debouncing(handleChange, 300);

    return (
        <div>
            <h1>Debouncing</h1>
            <input type="text" onChange={debounce} />
        </div>
    )
}