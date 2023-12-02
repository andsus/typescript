const RANDOM_KEY_LENGTH = 200
const A_CHAR_CODE = 'a'.charCodeAt(0)
const ALPHABET_LENGTH = 26

const randomChar = () => String.fromCharCode(
  Math.floor(Math.random() * ALPHABET_LENGTH) + A_CHAR_CODE
)

const makeRandomKey = () => Array.from(Array(RANDOM_KEY_LENGTH), randomChar).join('')

enum DIRECTION {
  Right = 1,
  Left = -1
}

export class SimpleCipher {
  key: string
  constructor(key? :string) {
    this.key =  key || makeRandomKey()
  }

  encode = (plainText :string) :string => 
    this.transpose(1, plainText)
  
  decode = (cipherText: string) :string =>
    this.transpose(-1, cipherText)

  shiftBy = (index :number):number => this.key.charCodeAt(index % this.key.length) - A_CHAR_CODE

  shiftCharCode = (charCode :number, direction :DIRECTION, index :number) => {
    const shiftValue = direction * this.shiftBy(index)
    const shiftCharCode = charCode - A_CHAR_CODE + shiftValue + ALPHABET_LENGTH 
    return (shiftCharCode % ALPHABET_LENGTH) + A_CHAR_CODE
  }

  transpose = (direction :DIRECTION, input :string) =>
    [...input]
      .map((letter, i) => 
          String.fromCharCode(
            this.shiftCharCode(letter.charCodeAt(0), direction, i)
          )
        )
      .join('')
    
}
