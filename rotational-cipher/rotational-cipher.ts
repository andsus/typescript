const a: number = 'a'.charCodeAt(0), 
  A: number = 'A'.charCodeAt(0)

function cipherOf (base: number, ch: string, key: number): string { 
	return String.fromCharCode( (ch.charCodeAt(0) - base + key) % 26 + base)
}

export function rotate(message: string, n: number): string {
	return [...message].map(c => 
			c.match(/[a-z]/)? cipherOf(a, c, n) :
			c.match(/[A-Z]/)? cipherOf(A, c, n) : 
			c)
			.join('')
}

