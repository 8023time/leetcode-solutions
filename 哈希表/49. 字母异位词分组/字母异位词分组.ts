function groupAnagrams(strs: string[]): string[][] {
    const map = new Map<string, string[]>();
    for (const str of strs) {
        const start: string = str.split("").sort().join("");
        if (!map.has(start)) {
            map.set(start, [str]);
        } else {
            map.set(start, [...map.get(start)!, str]);
        }
    }

    return Array.from(map.values());
}
