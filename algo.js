// Algorithm: Sentence Analyzer

// Counters
let length = 0;
let words = 1;
let vowels = 0;

// Vowel list
const vowelList = ['a', 'e', 'i', 'o', 'u'];

// Input sentence
let sentence = "Hello world."; // You can change this

let i = 0;
let char = sentence[i];

// Process character by character
while (char !== '.') {
    length++;

    // Check vowel (convert to lowercase for safety)
    if (vowelList.includes(char.toLowerCase())) {
        vowels++;
    }

    // Check space for word count
    if (char === ' ') {
        words++;
    }

    i++;
    char = sentence[i];
}

// Output results
console.log("Length:", length);
console.log("Words:", words);
console.log("Vowels:", vowels);