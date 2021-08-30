const ALPHABET = 'abcdefghijklmnopqrstuvwxyz';

class Pangram {
    
    constructor(private text: string) {
        this.text = text.toLowerCase();
    }

    isPangram(): boolean {
        return [...ALPHABET]
            .every(c => this.text.includes(c))
    }
}

export default Pangram;