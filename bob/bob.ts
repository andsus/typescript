class Bob {
  hey(utterance: string): string {
    utterance = utterance.trim()

    const isQuestion = utterance.endsWith("?")
    const isShouting = /[a-zA-Z]+/.test(utterance) 
                          && utterance == utterance.toUpperCase()

    if (!utterance) return 'Fine. Be that way!'

    if (isShouting && isQuestion) 
      return 'Calm down, I know what I\'m doing!'

    if (isShouting) return 'Whoa, chill out!'

    if (isQuestion) return 'Sure.'

    return 'Whatever.'
  }


}

export default Bob