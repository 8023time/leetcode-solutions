function simplifyPath(path: string): string {
    const path_arr: string[] = path.split("/");
    let stack: string[] = [];
    for (const i of path_arr) {
        if (i === "" || i === ".") {
            continue;
        }

        if (i !== "..") {
            stack.push(i);
        }

        if (i === ".." && stack.length > 0) {
            stack.pop();
        }
    }

    return "/" + stack.join("/");
}
