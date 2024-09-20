import chalk from "chalk"

export class PromptStructure {
  name = null
  description = null

  constructor({ name, description}) {
    if (!name || !description) return
    this.name = name
    this.description = chalk.yellow(description)
  }

  generateOptions(n1, n2) {
    if (!n1 || !n2) return;
    this.pattern = new RegExp(`^[${n1}-${n2}]+$`);
    this.message = chalk.red.italic(`Escolha um número entre ${n1} e ${n2}`)
    this.require = true
    return this
  }

}