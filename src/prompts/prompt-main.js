import { PromptStructure } from "./prompt-data.js"

const mainPrompt = [
  new PromptStructure
    ({
      name: "select",
      description: "Escolha a ferramenta (1 - QRCODE) ou (2 - PASSWORD)"
    }).generateOptions(1, 2)
]

export default mainPrompt