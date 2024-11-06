import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <div className="w-full h-svh flex items-center justify-center flex-col lg:gap-4 gap-6">
      <h1 className="lg:text-4xl text-3xl font-bold">Page not found</h1>
      <p className="text-gray-600 font-semibold lg:text-2xl text-xl">
        404! Seems like we don't have this page.
      </p>
      <Link
        to="/"
        className="bg-orange-700 font-bold text-white lg:px-6 lg:py-3 px-4 py-3 rounded-2xl hover:bg-orange-800 transition duration-300"
      >
        Go back home
      </Link>
    </div>
  );
}

export default ErrorPage;
