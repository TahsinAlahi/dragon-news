import { FormEvent, useRef } from "react";
import NavBar from "../components/NavBar";
import { useAuth } from "../context/AuthContext";

function Register() {
  const { register } = useAuth();
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const termRef = useRef<HTMLInputElement>(null);

  function handleRegister(e: FormEvent) {
    e.preventDefault();

    if (
      emailRef.current?.value &&
      passwordRef.current?.value &&
      termRef.current?.checked
    ) {
      register(emailRef.current.value, passwordRef.current.value);
    }
  }

  return (
    <div className="pt-6 bg-gray-500/10 min-h-svh flex items-center justify-center flex-col font-sora">
      <NavBar />
      <div className="lg:mx-auto flex-grow w-full mb-5">
        <div className="bg-white w-full lg:w-2/5 lg:mx-auto h-fit my-auto p-10 rounded-lg">
          <h1 className="pb-5 mb-5 border-b-2 border-gray-300 lg:text-3xl text-2xl font-semibold text-center text-gray-700">
            Register your account
          </h1>
          <form onSubmit={handleRegister}>
            {/* <div className="flex flex-col w-full lg:gap-3 gap-2 mb-6">
              <label className="text-lg font-semibold">Your Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="p-4 lg:p-5 bg-gray-500/10 rounded-md outline-none"
              />
            </div> */}
            {/* <div className="flex flex-col w-full lg:gap-3 gap-2 mb-6">
              <label className="text-lg font-semibold">Photo URL</label>
              <input
                type="url"
                placeholder="Enter your photo URL"
                className="p-4 lg:p-5 bg-gray-500/10 rounded-md outline-none"
              />
            </div> */}
            <div className="flex flex-col w-full lg:gap-3 gap-2 mb-6">
              <label className="text-lg font-semibold">Email</label>
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
            <div className="flex flex-row items-center w-full lg:gap-3 gap-2 mb-6">
              <input
                type="checkbox"
                className="p-4 lg:p-5 bg-gray-500/10 rounded-md outline-none"
                ref={termRef}
              />
              <label className="text-lg font-medium">
                Accept <span className="font-semibold">Term & Conditions</span>
              </label>
            </div>
            <button className="w-full p-4 bg-gray-800 hover:bg-gray-700 rounded-md text-white text-center font-semibold">
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
