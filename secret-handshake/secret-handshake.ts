export function commands(code: number): string[] {
        let handshake = []

        if (code & 0b1) handshake.push('wink')
        if (code & 0b10) handshake.push('double blink')
        if (code & 0b100) handshake.push('close your eyes')
        if (code & 0b1000) handshake.push('jump')
        if (code & 0b10000) handshake.reverse()

        return handshake
}