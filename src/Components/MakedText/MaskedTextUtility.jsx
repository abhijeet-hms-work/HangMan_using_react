export function getAllCharacters(word, usedLetters) {
  //This function wil return a string with all the characters  of the word that has been gussed so far
  usedLetters = usedLetters.map((letter) => letter.toUpperCase()); //['b', 'e'] -> ['B' 'E']
  const gussedLetters = new Set(usedLetters); //{'B','E'}
  const characters = word
    .toUpperCase()
    .split("")
    .map((char) => {
      if (gussedLetters.has(char)) {
        return char;
      }
      return "_";
    }); //['_','_','_',B,'_',E]
  return characters.join(""); //__B_E
}
