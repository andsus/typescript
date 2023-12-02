// Setup Regex Patterns

// Valid operations
const ISVALIDOPERATION = /^What is(plus|minus|multiplied by|divided by|\s|-?\d)*\?$/

// Valid syntax 
const ISVALIDSYNTAX = /^What is (-?\d+)(?: (plus|minus|multiplied by|divided by|cubed) (-?\d+))*\?$/;

const DIGITPATTERN = /(-?\d+)/g;

const OPERATIONPATTERN = /(plus|minus|multiplied by|divided by)/g;

const OPERATIONS: Record<string, (a: number, b: number) => number> = {
  'plus': (a, b) => a + b,
  'minus': (a, b) => a - b,
  'multiplied by': (a, b) => a * b,
  'divided by': (a, b) => a / b,
}

export const answer = (question: string) => {

  if (!ISVALIDOPERATION.test(question)) throw new Error("Unknown operation")

  if (!ISVALIDSYNTAX.test(question)) throw new Error("Syntax error")

  // Extract digits
  const digits = question.match(DIGITPATTERN)?.map((ch) => Number(ch))

  // Extract operations text
  const operations = question.match(OPERATIONPATTERN)?.map((opName) => OPERATIONS[opName]) ?? []

  // Extract first digit and pass it to digits.reduce(..,initialDigit) for 0 base index i
  const initialDigit = digits?.shift()
  return digits?.reduce((acc, v, i) => operations[i](acc || 0, v), initialDigit) 
} 