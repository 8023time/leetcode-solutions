function decodeString(s: string): string {
    /**
     * 思路：采用递归来解决这个问题
     * 如果首元素是字母，就与之前的字符进行拼接
     * 如果不是字母，就是数字，递归进行
     */
    // 处理空字符串
    if (s.length === 0) {
        return "";
    }

    // s[a] 是字母
    if ("a" <= s[0] && s[0] <= "z") {
        return s[0] + decodeString(s.slice(1));
    }

    // s[a] 是数字
    const start_index = s.indexOf("[");
    let start_number = 1;
    for (let i = start_index + 1; ; i++) {
        if (s[i] === "[") {
            start_number++;
        }
        if (s[i] === "]") {
            start_number--;
            // 找到了结束的位置
            if (start_number === 0) {
                const k = Number(s.substring(0, start_index));
                return (
                    decodeString(s.slice(start_index + 1, i)).repeat(k) +
                    decodeString(s.slice(i + 1))
                );
            }
        }
    }
}
