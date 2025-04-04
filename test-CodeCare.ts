function returnLinesWhereLetterAppearingTwice(input: string): string {
    const lines: string[] = input.split('\n');
    const result: string[] = lines.filter(line => {
        const lettersCount: { [key: string]: number } = {};
        for (const letter of line) {
            lettersCount[letter] = (lettersCount[letter] || 0) + 1;
        }
        return Object.values(lettersCount).includes(2);
    });
    return result.join('\n');
}

const sampleInput = 
`asdf
fdas
asds
d fm
dfaa
aaaa
aabb
aaabb
caarsps`;

console.log(returnLinesWhereLetterAppearingTwice(sampleInput));