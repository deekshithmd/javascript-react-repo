export const Throttling = () => {


    const throttle = (fn, delay) => {
        let isSet = true;
        return function () {
            const context = this;
            const args = arguments;
            if (isSet) {
                isSet = false;
                fn.apply(context, args);
                setInterval(() => isSet = true, delay);
            }
        }
    }

    const handleChange = (e) => {
        console.log("value", e.target.value)
    }

    const throttling = throttle(handleChange, 1000);

    return (
        <div>
            <h1>Throttling</h1>
            <input type="text" onChange={throttling} />
        </div>
    )
}