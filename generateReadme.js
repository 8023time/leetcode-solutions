const fs = require("fs");
const path = require("path");

const rootDir = ".";
const outputPath = path.join(rootDir, "README.md");

function generateTree(dirPath, indent = "", isLast = false) {
  let tree = "";
  const items = fs.readdirSync(dirPath).sort();

  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    // 添加这行来忽略.git目录
    if (item === ".git") continue;
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
