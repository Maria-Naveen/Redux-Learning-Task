import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <nav className="flex justify-around p-4 bg-blue-300">
      <h1 className="font-bold">Redux Task</h1>
      <ul className="flex px-2">
        <Link to="/" className="mx-2 ">
          Home
        </Link>
        <Link to="/about" className="mx-2">
          About
        </Link>
      </ul>
    </nav>
  );
};

export default NavBar;
