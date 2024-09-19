
class Data {
  stringToBoolean(str) {
    return str.toLowerCase() === "true";
  };

  generateLetters() {
    let alphabet = '';
    for (let i = 65; i <= 90; i++) {
      alphabet += String.fromCharCode(i);
    }
    return alphabet
  }

  generateNumbers() {
    return Array.from({ length: 10 }, (_, i) => i).join('');
  }

  generateSpecialCharacters() {
    let specialChars = '';
    for (let i = 33; i <= 47; i++) specialChars += String.fromCharCode(i);
    for (let i = 58; i <= 64; i++) specialChars += String.fromCharCode(i);
    for (let i = 91; i <= 96; i++) specialChars += String.fromCharCode(i);
    for (let i = 123; i <= 126; i++) specialChars += String.fromCharCode(i);
    return specialChars
  }
}

export default new Data()