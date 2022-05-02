const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
// class VigenereCipheringMachine {
//   encrypt(message, key) {
//     if (key === undefined || message === undefined) {
//       throw new Error("Incorrect arguments!");
//     }

//     let filterString 

//     let result = ''
//     let k = ''

//     for (let i = 0; i < message.length; i++) {
//         let itemChar = message.charCodeAt(i)
//         filterString += (itemChar < 65 || (itemChar > 91 && itemChar < 97) || itemChar > 122) ? '': message[i]
//     }
//     for (let i = 0; i < filterString.length; i++) {
//       let shift = key[i % key.length].toUpperCase().charCodeAt(0) - 65
//       k += String.fromCharCode((filterString.toUpperCase().charCodeAt(i)+shift-65)%26+65)
//     }
//     let r = 0
//     for (let i = 0; i < message.length; i++) {
//       let itemChar = message.charCodeAt(i)
//       if(itemChar < 65 || (itemChar > 91 && itemChar < 97) || itemChar > 122){
//         result += message[i]
//       }else {
//         result += k[r]
//         r++
//       }
//     }

//     return result
//   }
//   decrypt(encryptedMessage, key) {
//     if (key === undefined || encryptedMessage === undefined) {
//       throw new Error("Incorrect arguments!");
//     }

//     let result = ''
//     for (let i = 0; i < encryptedMessage.length; i++) {
//       let shift = key[i % key.length].toUpperCase().charCodeAt(0) - 65
//       let itemChar = encryptedMessage.charCodeAt(i)
//       result += (itemChar < 65 || (itemChar > 91 && itemChar < 97) || itemChar > 122) ? encryptedMessage[i].toUpperCase() : String.fromCharCode(Math.abs(encryptedMessage.toUpperCase().charCodeAt(i)-shift-65)%26+65)
//     }

//     return result
//   }
// }

class VigenereCipheringMachine {
  constructor(direction = true) {
    this.direction = direction;
    this.alphabet = 'abcdefghijklmnopqrstuvwxyz';
  }
  encrypt(message, key) {
    return this.getMachineResult(message, key, true);
  }
  decrypt(message, key) {
    return this.getMachineResult(message, key, false);
  }
  createKeyStr(key, length) {
    return key.repeat(Math.ceil(length / key.length)).slice(0, length);
  }
  getIndexes(messageChar, keyChar) {
    return [this.getIndex(messageChar), this.getIndex(keyChar)];
  }
  getIndex(ch) {
    return this.alphabet.indexOf(ch.toLowerCase());
  }
  getMachineResult(message, key, ecnryptFlag) {
    if (!message || !key) throw new Error('Incorrect arguments!');
    const keyStr = this.createKeyStr(key, message.length);
    let skipCount = 0;
    const result = message.split('').map((c, i) => {
      const [messageIndex, keyIndex] = this.getIndexes(c, keyStr[i - skipCount]);
      if (messageIndex === -1) {
        skipCount += 1;
        return c;
      }
      return this.alphabet[
        ecnryptFlag
          ? (messageIndex + keyIndex) % 26
          : messageIndex > keyIndex
          ? messageIndex - keyIndex
          : (messageIndex - keyIndex + 26) % 26
      ];
    });
    return (this.direction ? result.join('') : result.reverse().join('')).toUpperCase();
  }
}

// const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
//     let result = ''
//     for (let i = 0; i < message.length; i++) {
//       let shift = i % key.length
//       let position = alphabet.indexOf(message[i].toUpperCase())
//       let newPos = (position + shift) % 26
//       result += alphabet[newPos]
//     }

// 'ABC'.charCodeAt(0) 65

module.exports = {
  VigenereCipheringMachine
};
