import chalk from "chalk"

const promptQRCode = [
  {
    name: "link",
    description: chalk.yellow('Informe o link para gerar o QR CODE:'),
  },
  {
    name: "type",
    description: chalk.yellow('Escolha entre o tipo de QR CODE (1 - IMAGEM) ou (2 - TERMINAL)'),
    pattern: /^[1-2]+$/,
    message: chalk.red.italic("Escolha entre 1 e 2"),
    require: true
  },
]

export { promptQRCode }
