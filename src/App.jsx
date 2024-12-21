import Button from "./Components/Button/Button";

import TextInputFormContainer from "./Components/TextInputForm/TextInputFormContainer";

function App() {
  return (
    <div>
      <h1 className="font-semibold text-3xl">Welcome to Hangman</h1>
      <TextInputFormContainer
        onSubmit={(value) =>
          console.log("value coming from the hidden form is", value)
        }
      />
    </div>
  );
}

export default App;
