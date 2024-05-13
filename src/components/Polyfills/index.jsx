export const Polyfills = () => {

    // forEach Polyfill
    Array.prototype.myForEach = function (cb) {
        const context = this;
        for (let i = 0; i < context.length; i++) {
            cb(context[i], i, context)
        }
    }
    console.log('forEach polyfill result', [2, 3, 4].myForEach(v => console.log("v", v + 1)))
    // console.log('forEach native result', [2, 3, 4].forEach(v => v + 1))

    //Map Polyfill
    Array.prototype.myMap = function (cb) {
        const result = []
        const context = this;
        for (let i = 0; i < context.length; i++) {
            result.push(cb(context[i], i, context))
        }
        return result
    }
    console.log("Map result", [1, 2, 3].myMap(v => v + 1));

    // Filter Polyfill
    Array.prototype.myFilter = function (cb) {
        const result = [];
        const context = this;

        for (let i = 0; i < context.length; i++) {
            if (cb(context[i], i, context)) {
                result.push(context[i])
            }
        }
        return result;
    }
    console.log("Filter result", [2, 4, 5].myFilter(v => v > 3));

    // Reduce Polyfill
    Array.prototype.myReduce = function (cb, initialValue) {
        let accumulator = initialValue == undefined ? undefined : initialValue;
        const context = this;
        for (let i = 0; i < context.length; i++) {
            accumulator = accumulator ? cb(accumulator, context[i], i, context) : context[i]
        }
        return accumulator;
    }
    console.log("Reduce result", [2, 4, 5, 6].myReduce((acc, v) => acc + v, 3))

    // Bind and its polyfill
    const obj1 = {
        a: 1,
        b: 2,
        fn: function (c) {
            console.log("City", c, 'b', this.b)
        }
    }
    // obj1.fn("mangalore") // City mangalore b 2
    const obj2 = {
        a: 5,
        b: 10
    }
    // const fn2=obj1.fn.bind(obj2,'bengaluru')
    const fn2 = obj1.fn.bind(obj2)
    fn2('bengaluru'); // City bengaluru b 10

    Function.prototype.myBind = function (obj, ...args) {
        const fn = this;
        // const obj=arguments.slice(0,1)
        // const args= arguments.slice(1,arguments.length)
        return function (...arg) {
            // fn.call(obj,...args, ...arg)
            fn.apply(obj, [...args, ...arg])
        }
    }

    const obj3 = {
        a: 1,
        b: 2,
        fn: function (c) {
            console.log("Polyfill City", c, 'b', this.b)
        }
    }
    // obj1.fn("mangalore") // City mangalore b 2
    const obj4 = {
        a: 5,
        b: 10
    }
    // const fn2=obj1.fn.bind(obj2,'bengaluru')
    const fn3 = obj3.fn.myBind(obj4)
    fn3('bengaluru'); // City bengaluru b 10

    // DeepCopy
    const deepCopy = (obj) => {
        let result = {};
        for (let key in obj) {
            if (typeof obj[key] === 'object') {
                result[key] = deepCopy(obj[key])
            }
            else {
                result[key] = obj[key]
            }
        }
        return result
    }

    const obj = {
        a: 1,
        b: 2,
        c: {
            d: 3,
            e: 4,
            f: {
                g: 5
            }
        }
    }

    console.log("Deepy copy", deepCopy(obj))

    // Currying sum(a)(b)(c)();

    const currySum = function (a) {
        return function (b) {
            if (b) {
                return currySum(a + b);
            }
            return a;
        }
    }

    console.log('sum in currying', currySum(1)(2)(3)())

    return (
        <h1>Polyfills</h1>
    )
}

