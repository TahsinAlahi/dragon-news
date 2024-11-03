import facebookImg from "../assets/facebook.png";
import twitterImg from "../assets/twitter.png";
import instagramImg from "../assets/instagram.png";

function FindUsLink() {
  return (
    <div className="mt-8">
      <h2 className="text-xl font-semibold mb-4">Find Us On</h2>
      <div className="border-2 border-gray-500/30 rounded-md">
        <a
          href="https://www.facebook.com"
          className="flex items-center gap-3 p-4 hover:bg-gray-500/10"
        >
          <img
            src={facebookImg}
            alt="Facebook Contact Link"
            className="w-7 aspect-square"
          />
          <p className="text-gray-600 font-semibold">Facebook</p>
        </a>
        <a
          href="https://x.com/"
          className="flex items-center gap-3 p-4 border-y-2 border-gray-500/30 hover:bg-gray-500/10"
        >
          <img
            src={twitterImg}
            alt="Twitter Contact Link"
            className="w-7 aspect-square"
          />
          <p className="text-gray-600 font-semibold">Twitter</p>
        </a>
        <a
          href="https://www.instagram.com"
          className="flex items-center gap-3 p-4 hover:bg-gray-500/10"
        >
          <img
            src={instagramImg}
            alt="Instagram Contact Link"
            className="w-7 aspect-square"
          />
          <p className="text-gray-600 font-semibold">Instagram</p>
        </a>
      </div>
    </div>
  );
}

export default FindUsLink;
