/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let temp = 0;
    let i = 0;
    let x = 0;
    for(x = 0; x<nums.length; x++){
        temp += nums[x];
        if(temp >= target) break;
    }
    if(temp < target) return 0;
    let res = Infinity;
    while(x < nums.length){
        if(temp >= target){
            res = Math.min(res, x - i + 1)
            temp -= nums[i]; 
            i++;
        }else {
            x++;
            temp += nums[x]
        }
    }
    return res;
};