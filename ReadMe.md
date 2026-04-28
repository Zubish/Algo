Start

Set length = 0
Set words = 1
Set vowels = 0

Read character

While character != '.'
    length = length + 1

    If character is vowel
        vowels = vowels + 1
    EndIf

    If character == ' '
        words = words + 1
    EndIf

    Read next character
EndWhile

Display length
Display words
Display vowels

End


**Sentence Analyzer Algorithm (JavaScript)

Description**
This project implements a simple algorithm in JavaScript that reads a sentence character by character and calculates:

- The total number of characters (length)
- The number of words
- The number of vowels

The sentence is assumed to end with a period (`.`), and words are separated by a single space.


**How It Works**

The algorithm processes the sentence one character at a time using a loop. It stops when it encounters a full stop (`.`).

**It uses three counters:**
- `length` → counts total characters
- `words` → counts total words
- `vowels` → counts total vowels



**Algorithm Logic**

1. Initialize:
   - `length = 0`
   - `words = 1`
   - `vowels = 0`

2. Loop through each character:
   - Increase `length`
   - If character is a vowel (`a, e, i, o, u`), increase `vowels`
   - If character is a space (` `), increase `words`

3. Stop when `.` is reached
