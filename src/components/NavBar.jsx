import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <nav>
      <h1>Redux Task</h1>
      <ul>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </ul>
    </nav>
  );
};

export default NavBar;
