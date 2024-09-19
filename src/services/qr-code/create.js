import prompt from "prompt"
import {promptQRCode} from "../../prompts/prompt-qrcode.js"
import { handle } from "./handle.js"

function createQRCode() {
  prompt.get(promptQRCode, handle)
  prompt.start()
}

export { createQRCode }