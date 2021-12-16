import Header from "./Header";

const Game = () => {
  return (
    <div className="game-div">
      <Header />
      <div className="unwind-banner">
        <h1 className="journal-title"> MeTime </h1>
      </div>
      {/* <h2>Game</h2> */}

<div className="game-wrapper">   
  <div className="announce" >  

<h2>Press click to start!</h2>
</div>
<div className="game-body-div">

   <div className="game-body"> 
   Game Body
   </div>

        <div className="click">
          <p>Click</p>
        </div>

        <div className="flip">
          <p>Flip</p>
        </div>

        <div className="turn">
          <p>Turn</p>
       
      </div>
</div>
</div>
      
     </div>
  );
};

export default Game;
