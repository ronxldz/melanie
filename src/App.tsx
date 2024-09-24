import { useState } from "react";
import "./App.css";

const phrases = [
  "no",
  "are you sure??",
  "maybe think again...",
  "pleaseeee?",
  "cmon bae be fr",
  "you're being silly",
  "reconsider?",
  "ugh still no???",
  "can’t you just say yes already?",
  "is that your final answer pookie?",
  "i don't think you're thinking this through...",
  "just think about it for a second longer…",
  "i know you wanna say yes!",
  "last call! final answer?",
];
function App() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  function handleNoClick() {
    setNoCount(noCount + 1);
  }

  function getNoButtonText() {
    return phrases[Math.min(noCount, phrases.length - 1)];
  }

  return (
    <div className="valentine-container">
      {yesPressed ? (
        <>
          <img
            alt="kittycat"
            src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNjd1cWN2MXJnbDlwbjZsdWVzOTN2OWc2Nmh6NHJ5NG5xYzIwbzBubCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/sNPeJFq6YNEvLZdcqX/giphy.gif"
          />
          <div className="text">YAYYY!</div>
        </>
      ) : (
        <>
          <img
            alt="kittycat2"
            src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExaHZ4bWh6azMwcHRtdGwycGMyeDB0bGRhdHhscjhoOGl5MW03Z2hxZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/QAn6JoVuABBEapYyX2/giphy.gif"
          />
          <div className="question">925 Battery Ave SE Ste 1125 @ 8?</div>
          <div>
            <button
              className="yesButton"
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              YES
            </button>
            <button onClick={handleNoClick} className="noButton">
              {getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default App;

