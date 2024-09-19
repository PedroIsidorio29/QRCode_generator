import data from "../utils/data.js"

function handle() {
  const characters = []

  const passwordLength = process.env.PASSWORD_LENGTH

  if (data.stringToBoolean(process.env.UPPERCASE_LETTERS));
  characters.push(...data.generateLetters());

  if (data.stringToBoolean(process.env.LOWERCASE_LETTERS));
  characters.push(...data.generateLetters().toLocaleLowerCase());

  if (data.stringToBoolean(process.env.NUMBERS));
  characters.push(...data.generateNumbers());

  if (data.stringToBoolean(process.env.SPECIAL_CHARACTERS));
  characters.push(...data.generateSpecialCharacters());

  return Array.from({ length: passwordLength }, () => characters[Math.floor(Math.random() * characters.length)]).join('');
}

export { handle }