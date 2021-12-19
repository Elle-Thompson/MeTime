import Header from "./Header";
import { useState } from "react";

const Game = () => {
  const choiceList = ["Turn it!", "Click it!", "Slide it!"];

  const [currentChoice, setCurrentChoice] = useState();
  const [score, setScore] = useState(0);
  // const [time, setTime] = useState(0);

  const currentButton = () => {
    setCurrentChoice(choiceList[Math.floor(Math.random() * choiceList.length)]);
    return currentChoice;
  };

  const handleStart = () => {
    setCurrentChoice(currentButton);
  };

  const handleChoice = (event) => {
    console.log(event.target.innerText);
    console.log(currentChoice);
    const text= event.target.innerText + " it!" 
    if (text == currentChoice) {
      currentButton();
      setScore(() => score + 1);
    } else {
      setCurrentChoice("Game Over");
    }
  };

  const handleReset = () => {
    setCurrentChoice();
    setScore(0);
  };

  const Click = "Click it!"
  const Turn = "Turn it!"
  const Slide = "Slide it!"

  return (
    <div className="game-div">
      <Header />
      <div className="unwind-banner">
        <h1 className="journal-title"> MeTime </h1>
      </div>

      <div className="game-wrapper">
        {/* <div className="announce">
          <h2>Press click to start!</h2>
        </div> */}
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
          <div className="game-body">Game Body</div>

          <div className="click">
            <p onClick={handleChoice}> Click
            </p>
          </div>

          <div className="turn">
            <p onClick={handleChoice}>
            
              Turn 
            </p>
          </div>

          <div className="slide">
            <p onClick={handleChoice}>
        
              Slide  
              
            </p> 
            
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
