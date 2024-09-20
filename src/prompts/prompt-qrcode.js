import { PromptStructure } from "./prompt-data.js"


const promptQRCode = [
  new PromptStructure({
    name: "link",
    description: "Informe o link para gerar o QR CODE"
  }),
  new PromptStructure({
    name: "type",
    description: "Escolha entre o tipo de QR CODE (1 - IMAGEM) ou (2 - TERMINAL)"
  }).generateOptions(1, 2)
]

export { promptQRCode }
