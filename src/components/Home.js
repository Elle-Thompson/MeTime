import Header from "./Header";
import { useNavigate, Link } from "react-router-dom";

const Home = () => {
//   <Header />

  return (
    <div>
      <h2>Home</h2>

      <nav>
        <Link to="/game">Game</Link>
        <Link to="/journal">Journal</Link>
        <Link to="/visuals">Visuals</Link>
      </nav>


      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Home;
