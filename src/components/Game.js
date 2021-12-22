import Header from "./Header";
import { useState} from "react";

const Game = () => {
  const choiceList = ["Turn it!", "Click it!", "Slide it!"];
  const buttonsList = ["Turn", "Click", "Slide"]
  const [currentChoice, setCurrentChoice] = useState();
  // const [button1, setButton1] = useState("");
  // const [button2, setButton2] = useState("");
  // const [button3, setButton3] = useState("");
  const [timer, setTimer] = useState(null);
  const [score, setScore] = useState(0);

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

  
  // const button1Display = () => {
  //   setButton1(buttonsList[Math.floor(Math.random() * buttonsList.length)]);
  //   if (button1 !== button2 && button1 !== button3) {
  //    } else {
  //      setButton1(buttonsList[Math.floor(Math.random() * buttonsList.length)]);
  //    }
  //    return button1;
  // }
  // const button2Display = () => {
  //   setButton2(buttonsList[Math.floor(Math.random() * buttonsList.length)]);
  //   if (button2 !== button1 && button2 !== button3) {
  //    return button2;
  //   } else {
  //     setButton2(buttonsList[Math.floor(Math.random() * buttonsList.length)]);
  //   }
  //   return button2;
  // }
  // const button3Display = () => {
  //   setButton3(buttonsList[Math.floor(Math.random() * buttonsList.length)]);
  //   if (button3 !== button1 && button3 !== button2) {
  //    return button3;
  //   } else {
  //     setButton3(buttonsList[Math.floor(Math.random() * buttonsList.length)]);
  //   }
  //   return button3;
  // }

  const currentButton = () => {
    setCurrentChoice(choiceList[Math.floor(Math.random() * choiceList.length)]);
    return currentChoice;
  };

  const handleStart = () => {
    setCurrentChoice(currentButton);
    setScore(0);
  };


  const handleChoice = (event) => {
    console.log(timer)
    const text = event.target.innerText + " it!";
     setTimer(setTimeout(() => {
      console.log("hi")
      setCurrentChoice("Game Over");
    }, 1500))
      // button1Display();
      // button2Display();
      // button3Display();
    if (text === currentChoice) {
      currentButton();
      setScore(() => score + 1);
      
      clearTimeout(timer);

    } else {
      setCurrentChoice("Game Over");
    }
  };

  const handleReset = () => {
    setCurrentChoice();
    setScore(0);
  };

  return (
    <div className="game-div">
      <Header />
      <div className="unwind-banner">
        <h1 className="journal-title"> MeTime </h1>
      </div>
 
      <div className="game-wrapper">
        <div className="current-choice">
          <h2>{currentChoice} </h2>
        </div>
        <div id="score">
          <div id="score-title">
            <h4> Score </h4>
          </div>
          <h4> : {score} </h4>
        </div>

        <div className="game-body-div">
          <div className="click">
          {/* {button1} */}
            <p onClick={handleChoice}> Click</p>
          </div>

          <div className="turn">
          {/* {button2} */}
            <p onClick={handleChoice}>Turn</p>
          </div>

          <div className="slide">
          {/* {button3} */}
            <p onClick={handleChoice}>Slide</p>
          </div>

          <div id="control-panel">
            <button onClick={handleStart} id="start-button">
              Start
            </button>

            <button onClick={handleReset} id="reset-button">
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Game;
