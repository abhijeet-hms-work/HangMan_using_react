import { Link, useNavigate } from "react-router-dom";
import TextInputFormContainer from "../../Components/TextInputForm/TextInputFormContainer";

function StartGame() {
  const navigate = useNavigate();
  function handelSubmit(value) {
    navigate("/play", { state: { wordSelected: value } });
  }

  return (
    <div>
      StartGame
      <TextInputFormContainer onSubmit={handelSubmit} />
    </div>
  );
}

export default StartGame;
