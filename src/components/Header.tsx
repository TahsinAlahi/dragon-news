import { Link } from "react-router-dom";
import dateFormatter from "../utils/dateFormatter";

function Header() {
  const { weekDay, day, month, year } = dateFormatter(new Date());

  return (
    <header className="flex flex-col items-center justify-center lg:max-w-screen-lg lg:mx-auto lg:gap-3 my-7 gap-3 lg:my-6">
      <Link
        to="/"
        className="lg:text-6xl text-5xl font-normal mb-3 font-kaushan"
      >
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

export default Header;
