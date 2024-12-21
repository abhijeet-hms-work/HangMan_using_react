import { Link } from "react-router-dom";
import MaskedText from "../../Components/MakedText/MaskedText.jsx";
import LetterButtons from "../../Components/LetterButtons/LetterButtons.jsx";
const PlayGame = () => {
  return (
    <div>
      <h1>PlayGame</h1>
      <MaskedText text="humble" usedLetters={["b", "e"]} />
      <hr />
      <LetterButtons usedLetters={["b", "e"]} />

      <hr />
      <Link to="/start"> Start Game</Link>
    </div>
  );
};

export default PlayGame;
