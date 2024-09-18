import prompt from "prompt"
import mainPrompt from "./prompts/prompt_main.js"


(function main() {
  prompt.get(mainPrompt, (err, choose) => {
    if (choose.select===1) console.log("escolheu o QRCode");
    if (choose.select===2) console.log("escolheu o password");
  })
  prompt.start()
})()