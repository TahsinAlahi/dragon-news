import googleImg from "../assets/google.png";
import githubImg from "../assets/github.png";

function LoginWebsites() {
  return (
    <div className="w-full">
      <h2 className="text-lg font-semibold mb-4">Login With</h2>
      <div className="flex flex-col gap-2">
        <button className="flex items-center justify-center py-1 rounded-md gap-2 w-full border border-blue-700">
          <img src={googleImg} alt="Login with Google" className="w-5" />
          <p className="text-blue-700 ">Login with Google</p>
        </button>
        <button className="flex items-center justify-center py-1 rounded-md gap-2 w-full border border-black">
          <img src={githubImg} alt="Login with Github" className="w-5" />
          <p className="text-black">Login with Github</p>
        </button>
      </div>
    </div>
  );
}

export default LoginWebsites;