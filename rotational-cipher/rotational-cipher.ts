const a = 'a'.charCodeAt(0),
	A = 'A'.charCodeAt(0)

export default class RotationalCipher {
	static rotate(message: string, n: number) {
		return [...message].map(c => 
				c.match(/[a-z]/)? String.fromCharCode(a +(c.charCodeAt(0) -a +n)%26):
				c.match(/[A-Z]/)? String.fromCharCode(A +(c.charCodeAt(0) -A +n)%26): c)
			.join('')
	}
}
