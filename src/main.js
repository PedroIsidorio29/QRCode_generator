import prompt from "prompt"
import mainPrompt from "./prompts/prompt-main.js"
import { createQRCode } from "./services/qr-code/create.js";
import { Password } from "./services/password/create.js";

(function main() {
  prompt.get(mainPrompt, (_, choose) => {
    if (choose.select==1) createQRCode();
    if (choose.select==2) new Password().displayPassword();
  })
  prompt.start()
})()