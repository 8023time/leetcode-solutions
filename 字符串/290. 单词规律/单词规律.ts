function wordPattern(pattern: string, s: string): boolean {
    /**
     * 使用两个哈希表，分别存储pattern和s的映射关系
     */
    const pattren_map: Map<string, string> = new Map<string, string>();
    const s_map: Map<string, string> = new Map<string, string>();

    const s_arr: string[] = s.split(" ");

    // 如果长度不相等，则返回false
    if (s_arr.length !== pattern.length) {
        return false;
    }

    for (let i = 0; i < s_arr.length; i++) {
        const pattren_char = pattern[i];
        const s_char = s_arr[i];

        // 如果pattern中出现过该字符，且映射关系不一致，则返回false
        if (!pattren_map.has(pattren_char) && !s_map.has(s_char)) {
            pattren_map.set(pattren_char, s_char);
            s_map.set(s_char, pattren_char);
        } else {
            if (
                pattren_map.get(pattren_char) !== s_char ||
                s_map.get(s_char) !== pattren_char
            ) {
                return false;
            }
        }
    }
    return true;
}
