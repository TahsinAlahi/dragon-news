import { Link } from "react-router-dom";
import userPng from "../assets/user.png";

function NavBar() {
  return (
    <nav className="flex items-center justify-between lg:w-full lg:max-w-screen-lg lg:mx-auto lg:mx-6 mb-6">
      <div className="flex items-center justify-center gap-4 text-gray-600 font-semibold">
        <Link to="/" className="hover:underline hover:text-black">
          Home
        </Link>
        <Link to="/about" className="hover:underline hover:text-black">
          About
        </Link>
        <Link to="/career" className="hover:underline hover:text-black">
          Career
        </Link>
      </div>
      <div className="flex items-center lg:gap-4 gap-2">
        <img src={userPng} alt="Login" className="w-9  aspect-square" />
        <Link
          to="/login"
          className="lg:px-6 lg:py-2 p-2 rounded-md lg:rounded-none bg-gray-700 text-white font-bold "
        >
          Login
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;
