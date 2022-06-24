import Header from "./Header";
import { useState} from "react";

const Game = () => {
  const choiceList = ["Turn it!", "Click it!", "Slide it!"];
  
  const [buttonsList, setButtonsList] = useState(["Turn", "Click", "Slide", "O_O ", "O_O ", "O_O "]);
  const [currentChoice, setCurrentChoice] = useState();
 
  const [timer, setTimer] = useState(null);
  const [score, setScore] = useState(0);


  // This shuffle function as found on stack overflow "how to randomize shuffle a javascript array"
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    console.log(array)
    setButtonsList(array)
    // shuffledArray = array
    console.log(buttonsList)

}



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
    }, 1800))
       shuffleArray(buttonsList)
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
    setButtonsList(["Turn", "Click", "Slide", "O_O ", "O_O ", "O_O "])
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
          <div id="buttonEffect" className="click">
           
            <p onClick={handleChoice}> {buttonsList[0]} </p>
          </div>

          <div id="buttonEffect" className="test">
           
            <p onClick={handleChoice}>{buttonsList[4]}</p>
          </div>
          <div id="buttonEffect" className="test1">
           
            <p onClick={handleChoice}>{buttonsList[5]}</p>
          </div>
          <div id="buttonEffect" className="test2">
           
            <p onClick={handleChoice}>{buttonsList[3]}</p>
          </div>

          <div id="buttonEffect" className="turn">
           
            <p onClick={handleChoice}>{buttonsList[1]}</p>
          </div>

          <div id="buttonEffect" className="slide">
           
            <p onClick={handleChoice}>{buttonsList[2]} </p>
          </div>

          <div id="control-panel">
            <button onClick={handleStart} id="start-button">
              Start
            </button>

            <button onClick={handleReset} id="reset-button">
              Reset
            </button>
          </div>
          {/* <iframe src="https://www.youtube.com/embed/NSW5u1RTxEA"></iframe> */}
          
        </div>
      </div>
    </div>
  );
};

export default Game;
