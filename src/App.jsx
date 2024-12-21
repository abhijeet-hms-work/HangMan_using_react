import { Route, Routes } from "react-router-dom";

import PlayGame from "./pages/PlayGame/PlayGame";
import StartGame from "./pages/StartGame/StartGame";

function App() {
  return (
    // <div>
    //   <h1 className="font-semibold text-3xl">Welcome to Hangman</h1>
    //   <TextInputFormContainer
    //     onSubmit={(value) =>
    //       console.log("value coming from the hidden form is", value)
    //     }
    //   />
    // </div>
    <>
      <div>Navbar</div>
      <div>
        <Routes>
          <Route path="/play" element={<PlayGame />} />
          <Route path="/start" element={<StartGame />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
