import Header from "./Header";
import { useNavigate, Link } from "react-router-dom";

const Home = () => {
//   <Header />

  return (
    <div className="home">
      {/* <h2>Home</h2> */}
      <div className="unwind-banner">
        <h1 className="journal-title">  MeTime </h1>
      </div>
      <nav>
        <h3 className="game">Play a Game</h3>
        <Link id="btn1" to="/game"><i class="fas fa-gamepad fa-7x"></i></Link>
        <h3 className="journal1">Journal</h3>
        <Link id="btn2" to="/journal"><i class="fas fa-scroll fa-7x"></i></Link>
        <h3 className="music">Music</h3>
        <Link id="btn3" to="/visuals"><i class="fas fa-music fa-7x"></i></Link>
      </nav>
      {/* <img src="https://i.ibb.co/jWD7RPK/Me.png" alt="Me" border="0"/> */}

      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Home;
