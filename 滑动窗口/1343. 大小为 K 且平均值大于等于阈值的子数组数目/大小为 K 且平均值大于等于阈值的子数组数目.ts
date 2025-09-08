function numOfSubarrays(arr: number[], k: number, threshold: number): number {
    let avg: number = 0;
    let cur: number = 0;
    let res: number = 0;
    for (let i = 0; i < arr.length; i++) {
        cur += arr[i]!;

        let left: number = i - k + 1;
        if (left < 0) continue;

        avg = cur / k;
        if (avg >= threshold) res++;

        cur -= arr[left]!;
    }
    return res;
}

const ans_2 = {
    numOfSubarrays(arr: number[], k: number, threshold: number): number {
        let sum: number = 0;
        let res: number = 0;
        for (let i = 0; i < arr.length; i++) {
            sum += arr[i]!;
            if (i < k - 1) continue;
            if (sum >= k * threshold) res++;
            sum -= arr[i - k + 1]!;
        }
        return res;
    },
};
