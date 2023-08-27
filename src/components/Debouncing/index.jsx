import React, { useState } from "react"

export const Debouncing = () => {
    const [data, setData] = useState('')

    const debouncing = (fn, time) => {
        let id = 0;
        return function () {
            const context = this;
            const args = arguments;
            clearTimeout(id);
            id = setTimeout(() => fn.apply(context, args), time)
        }
    }


    const handleChange = (e) => {
        console.log("value", e.target.value)
        setData(e.target.value)
    }

    const debounce = debouncing(handleChange, 300)

    return (
        <div>
            <h1>Debouncing</h1>
            <input type="text" onChange={debounce} />
        </div>
    )
}