/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function (s) {
    let length = s.length
    let map = new Map()
    for (const stringnumber of s) {
        let number = (map.get(stringnumber) || 0) + 1
        map.set(stringnumber, number)
    }
    // 接下来就是对这个数据进行排序
    let stringarr = [...map.keys()]
    stringarr.sort((a, b) => map.get(b) - map.get(a))
    // 接着就是用一个新的字符串数组进行存储拼接后面的字符串数据
    let stringarrlength = stringarr.length
    let newarr = new Array(length)
    for (let i = 0; i < stringarrlength; i++) {
        const stringmaplength = map.get(stringarr[i])
        for (let j = 0; j < stringmaplength; j++) {
            newarr.push(stringarr[i])
        }
    }
    return newarr.join('')// 转换为字符串
};