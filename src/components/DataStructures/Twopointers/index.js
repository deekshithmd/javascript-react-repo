export const TwoPointers = () => {


    // move 0 to end
    function moveToEnd(arr) {
        let left = 0, right = 0;
        for (right = 0; right < arr.length; right++) {
            if (arr[right] !== 0) {
                const temp = arr[left];
                arr[left] = arr[right];
                arr[right] = temp;
                left++;
            }
        }
        return arr;
    }

    console.log('moved', moveToEnd([2, 0, 3, 0, 4, 5]))

    // Store max water
    function maxWater(heights) {
        let left = 0, right = heights.length - 1;
        let maxArea = 0;
        while (left <= right) {
            const maxHeight = Math.min(heights[left], heights[right])
            const distance = right - left;
            const area = maxHeight * distance;
            maxArea = Math.max(maxArea, area);

            if (heights[left] < heights[right]) {
                left++
            } else {
                right--
            }
        }
        return maxArea;
    }

    console.log('max water', maxWater([1, 8, 6, 2, 5, 4, 8, 3, 7]))

    // sliding wndow
    function maxSumAverage(arr, k) {
        const n = arr.length;
        let sum = 0;
        for (let i = 0; i < k; i++) {
            sum += arr[i]
        }
        let maxSum = 0;

        // for (let j = 0; j < n-k; j++) {
        //     sum -= arr[j];
        //     sum += arr[j + k];
        //     maxSum = Math.max(sum, maxSum)
        // }
        for (let i = k; i < n; i++) {
            sum -= arr[i - k];
            sum += arr[i];
            maxSum = Math.max(sum, maxSum)
        }

        return (maxSum / k)
    }

    console.log('max average', maxSumAverage([2, -4, 5, 2, 8, 6, 7, 20], 2))

    // longest substring
    function longestSubstring(str) {
        let n = str.length;
        const charSet = new Set([]);
        let left = 0;
        for (let right = 0; right < n; right++) {
            // debugger;
                while(charSet.has(str[right])){
                    charSet.delete(str[right]);
                    left++;
                }
            
            charSet.add(str[right])
        }
        
        return charSet.size;
    }

    console.log('longest', longestSubstring('abcabcbab'))

    function twoSum(arr, target){
        const map=new Map();
        for(let i=0;i<arr.length;i++){
            const diff = target-arr[i];
            if(map.has(diff)){
                return [map.get(diff),i]
            }
            map.set(arr[i], i)
        }
        return [];
    }

    console.log('two sum', twoSum([3,4,5,7],7))

    // bruteforce
    // var threeSum = function(nums) {
    //     const set=new Set();
    
    // for(let i=0;i<nums.length;i++){
    //     for(let j=i+1;j<nums.length;j++){
    //         for(let k=j+1;k<nums.length;k++){
    //             if(nums[i]+nums[j]+nums[k]===0){
    //                 set.add(JSON.stringify([nums[i],nums[j],nums[k]].sort()))
    //             }
    //         }
    //     }
    // }
    
    // return Array.from(set).map(triplet => JSON.parse(triplet));
        
    // };

    // var threeSum = function(nums) {
    //     const set=new Set();
    
    //     for(let i=0;i<nums.length;i++){
    //         const map= new Map()
    //         for(let j=i+1;j<nums.length;j++){
    //             const third = -(nums[i]+nums[j])
    //             if(map.has(third)){
    //                 const triplet = JSON.stringify([nums[i],nums[j],third].sort())
    //                 set.add(triplet)
    //             }
    //             map.set(nums[j],i)
    //         }
    //         map.clear()
    //     }
    
    //     return Array.from(set).map(item => JSON.parse(item))
        
    // };

    // Using sort

    return (
        <h3>Tow pointers</h3>
    )
}