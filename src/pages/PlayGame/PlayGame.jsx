import { Link } from "react-router-dom";
import MaskedText from "../../Components/MakedText/MaskedText.jsx";
import LetterButtons from "../../Components/LetterButtons/LetterButtons.jsx";
import { useState } from "react";
const PlayGame = () => {
  const [usedLetters, setUsedLetters] = useState([]);

  const handleLetterClick = function (letter) {
    setUsedLetters([...usedLetters, letter]);
  };

  return (
    <div>
      <h1>PlayGame</h1>
      <MaskedText text="humble" usedLetters={usedLetters} />
      <hr />
      <LetterButtons
        text="humble"
        usedLetters={usedLetters}
        onLetterClick={handleLetterClick}
      />

      <hr />
      <Link to="/start"> Start Game</Link>
    </div>
  );
};

export default PlayGame;
