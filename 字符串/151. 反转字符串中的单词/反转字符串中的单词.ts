function reverseWords(s: string): string {
    /**
     * 采用JavaScript中的内置的方法来解决这个题目
     */
    return s.trim().split(/\s+/).reverse().join(" ");
}
