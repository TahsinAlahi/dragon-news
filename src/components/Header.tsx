import { Link } from "react-router-dom";
import dateFormatter from "../utils/dateFormatter";

function NavBar() {
  const { weekDay, day, month, year } = dateFormatter(new Date());

  return (
    <header className="flex flex-col items-center justify-center lg:max-w-screen-lg lg:mx-auto lg:gap-3 lg:mt-5">
      <Link to="/" className="lg:text-6xl font-normal lg:mb-3">
        Dragon News
      </Link>
      <h3 className="text-gray-600">Journalism Without Fear or Favour</h3>
      <p className="text-gray-600 font-semibold">
        <span className="text-gray-800">{weekDay}</span>,
        {` ${day} ${month},${year}`}
      </p>
    </header>
  );
}

export default NavBar;
