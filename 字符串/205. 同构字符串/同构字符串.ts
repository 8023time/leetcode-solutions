function isIsomorphic(s: string, t: string): boolean {
    /**
     * 创建两个哈希表来存储映射关系
     */
    let map_s: Map<string, string> = new Map<string, string>();
    let map_t: Map<string, string> = new Map<string, string>();

    for (let i = 0; i < s.length; i++) {
        let s_char = s[i];
        let t_char = t[i];

        // 如果没有存储到map中，则添加映射
        if (!map_s.has(s_char) && !map_t.has(t_char)) {
            map_s.set(s_char, t_char);
            map_t.set(t_char, s_char);
        } else {
            // 如果已经存储到map中，则判断映射是否正确
            if (map_s.get(s_char) !== t_char || map_t.get(t_char) !== s_char) {
                return false;
            }
        }
    }
    return true;
}
