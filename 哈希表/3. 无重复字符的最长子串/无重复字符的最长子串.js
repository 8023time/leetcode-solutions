/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    // 一次for循环解决问题
    let result = 1
    let maxnumber = 1
    let start = 0
    for (let i=1;i<s.length;i++){
        let oldvalue = s[i-1]   
        let newvalue = s[i]
        if(oldvalue !== newvalue){
            maxnumber++
        }else{
            result = Math.max(result,maxnumber)
            maxnumber = 1
        }
    }
    return result
};