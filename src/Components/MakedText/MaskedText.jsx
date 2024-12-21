import { getAllCharacters } from "./MaskedTextUtility";
/**
 * {text} The Word to be gussed
 * {useLettrs The array of letters that have been gussed so far}
 *
 */

function MaskedText({ text, usedLetters }) {
  const letters = getAllCharacters(text, usedLetters).split("");
  return (
    <>
      {letters.map((letter, index) => {
        return (
          <span key={`letter-${index}`} className="inline-block mx-1">
            {letter}
          </span>
        );
      })}
    </>
  );
}
