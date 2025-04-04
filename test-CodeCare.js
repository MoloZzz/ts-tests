function linesWhereLetterAppearingTwice(input) {
    const lines = input.split('\n');
    const result = lines.filter(line => {
        const lettersCount = {};
        for (const letter of line) {
            lettersCount[letter] = (lettersCount[letter] || 0) + 1;
        }
        return Object.values(lettersCount).includes(2);
    });
    return result.join('\n');
}

const input = 
`asdf
fdas
asds
d fm
dfaa
aaaa
aabb
aaabb
caarsps
iiade
absc `;

console.log(linesWhereLetterAppearingTwice(input));