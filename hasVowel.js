function hasVowel(str) {
    const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
    return str.split("").some(char => vowels.includes(char));
}

console.log(hasVowel("hello")); // خروجی: true
console.log(hasVowel("rhythm")); // خروجی: false
