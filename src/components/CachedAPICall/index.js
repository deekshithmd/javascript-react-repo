const api = "https://jsonplaceholder.typicode.com/todos/1";

export default function Cached() {
    const cachedApiCall = (time) => {
        const cache = {};
        return async (url, config = {}) => {
            const key = `${url}${JSON.stringify(config)}`;
            const entry = cache[key];
            if (!entry || Date.now() > entry?.expiry) {
                try {
                    const res = await fetch(url, config);
                    const r = await res.json();

                    console.log("new");
                    cache[key] = { data: r, expiry: Date.now() + time };
                } catch (e) {
                    console.log("error in api call");
                }
            }
            return cache[key];
        };
    };

    const call = cachedApiCall(1000);
    call(api).then((res) => console.log("1", res));
    setTimeout(() => call(api).then((res) => console.log("2", res)), 600);
    setTimeout(() => call(api).then((res) => console.log("3", res)), 1100);
    return (
        <h1>Cached API Call</h1>
    );
}