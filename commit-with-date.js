import { execSync } from "child_process";

function get_data_type() {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

const data_type = get_data_type();
const commit_message = `add ${data_type}`;

execSync(`git commit -m "${commit_message}"`);
