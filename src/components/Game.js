import Header from "./Header";
import { useState, useEffect } from "react";

const Game = () => {
  const choiceList = ["Turn it!", "Click it!", "Slide it!"];

  const [currentChoice, setCurrentChoice] = useState();
  const [score, setScore] = useState(0);
  // const [time, setTime] = useState(0);

  const currentButton = () => {
    setCurrentChoice(choiceList[Math.floor(Math.random() * choiceList.length)])
    return currentChoice
  };

  const handleStart = () => {
    setCurrentChoice(currentButton)
  };

  const handleChoice = (event) => {
    console.log(event)
    console.log(currentChoice)
  if (event.target.outerText == currentChoice ) { currentButton(); setScore(()=> score + 1)} 
  else {  setCurrentChoice("Game Over") }  
  }


  const handleReset = () => {
    setCurrentChoice();
    setScore(0)
  }


const clickIt = "Click it!"
const turnIt = "Turn it!"
const slideIt = "Slide it!"


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
            <h4> Score  </h4>
          </div>
          <h4> : {score} </h4>
        </div>

        <div className="game-body-div">
          <div className="game-body">Game Body</div>

          <div id={clickIt} className="click">
            <p onClick={handleChoice}> <span className="click1">Click </span>it!</p>
          </div>

          <div id={turnIt} onClick={handleChoice} className="turn">
            <p> <span className="turn1">Turn </span>it!</p>
          </div>

          <div id={slideIt} onClick={handleChoice} className="slide">
            <p> <span className="slide1"> Slide  </span>it!</p>
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
