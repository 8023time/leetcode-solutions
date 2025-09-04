function convert(s: string, numRows: number): string {
    /**
     * 思路：就是通过遍历字符串，依次加入到指定的数组中的，最后进行批结
     */
    if (numRows === 1) return s;
    let index = 0;
    let flag = -1;
    let result: string[] = new Array(numRows).fill("");
    for (const char of s) {
        result[index] += char;
        // 如果是第一行或者最后一行，则需要反向
        if (index === 0 || index === numRows - 1) {
            flag = -flag;
        }
        index += flag;
    }
    return result.join("");
}
