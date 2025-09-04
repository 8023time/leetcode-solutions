function fullJustify(words: string[], maxWidth: number): string[] {
    let n: number = words.length;
    let i: number = 0;
    let result: string[] = [];

    // 遍历每一个数据
    while (i < n) {
        let begin: number = i;
        let totalChar: number = 0;
        let line: string = "";

        while (i < n && totalChar + words[i].length + (i - begin) <= maxWidth) {
            totalChar += words[i].length;
            i++;
        }

        // 如果是最后一行，或者当前只有一个单词，则就直接向左靠齐
        if (i === n || i - begin === 1) {
            line = words.slice(begin, i).join(" ");
            line += " ".repeat(maxWidth - line.length);
        } else {
            // 需要设计为满足两端对齐的形式
            const totalSpance: number = maxWidth - totalChar;
            const avgSpace: number = Math.floor(totalSpance / (i - begin - 1));
            let extraSpace: number = totalSpance % (i - begin - 1);

            for (let j = begin; j < i - 1; j++) {
                line +=
                    words[j] + " ".repeat(avgSpace + (extraSpace > 0 ? 1 : 0));
                extraSpace--;
            }

            // 最后一个单词需要单独处理
            line += words[i - 1];
        }

        result.push(line);
    }
    return result;
}
