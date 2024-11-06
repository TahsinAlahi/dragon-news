import NavBar from "../components/NavBar";

function LoginPage() {
  return (
    <div className="pt-6 bg-gray-500/10 min-h-svh flex items-center justify-center flex-col">
      <NavBar />
      <div className="lg:mx-auto flex-grow w-full">
        <div className=" w-full lg:w-2/5 lg:mx-auto h-fit my-auto p-10 rounded-lg">
          <h1 className="lg:pb-10 lg:mb-10 pb-5 mb-7 border-b-2 border-gray-300 lg:text-3xl text-2xl font-semibold text-center text-gray-700">
            Login your account
          </h1>
          <form>
            <div className="flex flex-col w-full lg:gap-3 gap-2 mb-6">
              <label className="text-lg font-semibold">Email address</label>
              <input
                type="email"
                placeholder="Enter your email address"
                className="p-4 lg:p-5 bg-gray-500/10 rounded-md outline-none"
              />
            </div>
            <div className="flex flex-col w-full lg:gap-3 gap-2 mb-6">
              <label className="text-lg font-semibold">Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                className="p-4 lg:p-5 bg-gray-500/10 rounded-md outline-none"
              />
            </div>
            <button className="w-full p-4 lg:p-5 bg-gray-800 hover:bg-gray-700 rounded-md text-white text-center font-semibold">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;