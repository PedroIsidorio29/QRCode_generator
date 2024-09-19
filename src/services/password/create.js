import chalk from "chalk"
import { Data } from "../utils/data.js"

class Password extends Data {

  constructor() {
    super()
  }

  displayPassword() {
    console.log(chalk.green("Password"));
    console.log(this.#generatePassword())
  }

  #generatePassword() {
    const characters = []

    const passwordLength = process.env.PASSWORD_LENGTH

    if (this.stringToBoolean(process.env.UPPERCASE_LETTERS));
    characters.push(...this.generateLetters());

    if (this.stringToBoolean(process.env.LOWERCASE_LETTERS));
    characters.push(...this.generateLetters().toLocaleLowerCase());

    if (this.stringToBoolean(process.env.NUMBERS));
    characters.push(...this.generateNumbers());

    if (this.stringToBoolean(process.env.SPECIAL_CHARACTERS));
    characters.push(...this.generateSpecialCharacters());

    return Array.from({ length: passwordLength }, () => characters[Math.floor(Math.random() * characters.length)]).join('');
  }
}

export { Password }