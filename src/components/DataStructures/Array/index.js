import React from "react";

export const Array = () => {
    const arr=[1,2,3,4,5];
    arr.push(6); // adds at end
    arr.pop(); // removes from end
    arr.unshift(7); // adds at begining
    arr.shift() // removes from begining

    // Time complexities
    // insert/remove end -> O(1) -> push/pop
    // insert/remove begining -> O(n) -> need to reset index -> shift/unshift/concat/slice/splice
    // Access -> O(1)
    // Search -> O(n) -> foreach/map/filter/reduce

    // Array methods
    // Map
    // Filter
    // Reduce
    // Slice
    // Splice

    return <h1>Array</h1>
}