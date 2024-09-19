import chalk from "chalk"
import { handle } from "./handle.js"

function createPassword() {
  console.log(chalk.green("Password"));
  console.log(handle());


}

export { createPassword }