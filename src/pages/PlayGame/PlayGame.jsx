import { Link, useLocation } from "react-router-dom";
import MaskedText from "../../Components/MakedText/MaskedText.jsx";
import LetterButtons from "../../Components/LetterButtons/LetterButtons.jsx";
import { useState } from "react";
import HangMan from "../../Components/HangMan/HangMan.jsx";
const PlayGame = () => {
  const [usedLetters, setUsedLetters] = useState([]);
  const [step, setStep] = useState(0);
  const location = useLocation();
  const wordSelected = location.state?.wordSelected; // if the state is nor defined,
  // it will return undefined, other wise it will return the value of wordSelected

  const handleLetterClick = function (letter) {
    if (wordSelected.toUpperCase().includes(letter)) {
      console.log("correct");
    } else {
      setStep(step + 1);
    }

    setUsedLetters([...usedLetters, letter]);
  };

  return (
    <div>
      <h1>PlayGame</h1>
      <MaskedText text={wordSelected} usedLetters={usedLetters} />
      <hr />

      <div className="flex justify-between items-center">
        <div className="basis-2/4">
          {" "}
          <LetterButtons
            text={wordSelected}
            usedLetters={usedLetters}
            onLetterClick={handleLetterClick}
          />
        </div>

        <div className="basis-2/4 flex justify-center items-center">
          <HangMan step={step} />
        </div>
      </div>

      <hr />
      <Link to="/start"> Start Game</Link>
    </div>
  );
};

export default PlayGame;
