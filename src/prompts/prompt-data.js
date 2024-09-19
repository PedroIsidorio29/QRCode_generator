import chalk from "chalk"

export class PromptStructure {

  constructor({ name, description, pattern, message }) {
    if (!name || !description) return
    this.name = name
    this.description = chalk.yellow(description)
    
    if (!pattern) return
    this.pattern = /^[1-2]+$/
    this.message = chalk.red.italic(message && "Escolha entre 1 e 2")
    this.require = true
  }

}