import fs from "fs";
import path from "path";

const rootDir = ".";
const outputPath = path.join(rootDir, "README.md");

function generateTree(dirPath, indent = "", isLast = false) {
    let tree = "";
    const items = fs.readdirSync(dirPath).sort();

    for (let i = 0; i < items.length; i++) {
        const item = items[i];
        // 添加这行来忽略.git目录
        if (item === ".git") continue;
        if (item === ".gitignore") continue;
        if (item === "package.json") continue;
        if (item === "node_modules") continue;
        if (item === ".prettierrc.json") continue;
        if (item === "generateReadme.js") continue;
        if (item === "package-lock.json") continue;
        if (item === "commit-with-date.js") continue;
        const fullPath = path.join(dirPath, item);
        const stat = fs.statSync(fullPath);
        const isLastItem = i === items.length - 1;

        if (stat.isDirectory()) {
            tree += `${indent}${isLast ? "    " : "│   "}`;
            tree += isLastItem ? "└── " : "├── ";
            tree += `${item}/\n`;
            tree += generateTree(
                fullPath,
                indent + (isLast ? "    " : "│   "),
                isLastItem
            );
        }
    }

    return tree;
}

const mdContent = `# LEETCODE-SOLUTIONS\n\n\`\`\`\n${rootDir}/\n${generateTree(
    rootDir
)}\`\`\``;

fs.writeFileSync(outputPath, mdContent, "utf-8");
console.log("✅ README.md 生成成功！");

// node generateReadme.js
