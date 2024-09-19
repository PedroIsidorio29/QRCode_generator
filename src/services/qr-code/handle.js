import qr from "qrcode-terminal"
import chalk from "chalk"


function handle(err, result) {
  if (err) {
    console.log(`error on aplication: \n ${err}`)
    return
  }
  const isSmall = result.type == 2
  qr.generate(result.link, { small: isSmall }, (qrcode) => {
    console.log(chalk.green(`QR CODE gerado com sucesso:\n\n ${qrcode}`));

  })
}

export { handle }