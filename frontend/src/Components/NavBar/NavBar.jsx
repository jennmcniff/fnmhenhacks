import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="mainN">
      <div className="team">
        <Link to="/">MoneyMap DE</Link>
      </div>
      <div className="nav">
        <Link to="/">Home</Link>
        <Link to="/info">About</Link>
      </div>
    </div>
  );
};

export default NavBar;
