import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import { useAuth } from "../context/AuthContext";
import { FormEvent, useRef } from "react";

function LoginPage() {
  const { loginWithEmail } = useAuth();
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  function handleLogin(e: FormEvent) {
    e.preventDefault();

    if (emailRef.current?.value && passwordRef.current?.value) {
      loginWithEmail(emailRef.current.value, passwordRef.current.value);
    }
  }

  return (
    <div className="pt-6 bg-gray-500/10 min-h-svh flex items-center justify-center flex-col font-sora">
      <NavBar />
      <div className="lg:mx-auto flex-grow w-full">
        <div className="bg-white w-full lg:w-2/5 lg:mx-auto h-fit my-auto p-10 rounded-lg">
          <h1 className="pb-5 mb-5 border-b-2 border-gray-300 lg:text-3xl text-2xl font-semibold text-center text-gray-700">
            Login your account
          </h1>
          <form onSubmit={handleLogin}>
            <div className="flex flex-col w-full lg:gap-3 gap-2 mb-6">
              <label className="text-lg font-semibold">Email address</label>
              <input
                type="email"
                placeholder="Enter your email address"
                className="p-4 lg:p-5 bg-gray-500/10 rounded-md outline-none"
                ref={emailRef}
              />
            </div>
            <div className="flex flex-col w-full lg:gap-3 gap-2 mb-6">
              <label className="text-lg font-semibold">Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                className="p-4 lg:p-5 bg-gray-500/10 rounded-md outline-none"
                ref={passwordRef}
              />
            </div>
            <button className="w-full p-4 bg-gray-800 hover:bg-gray-700 rounded-md text-white text-center font-semibold">
              Login
            </button>
          </form>
          <h1 className="text-gray-700 font-semibold text-center mt-4">
            Don't have an account?
            <Link className="text-orange-800 font-bold" to="/register">
              Register
            </Link>
          </h1>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
