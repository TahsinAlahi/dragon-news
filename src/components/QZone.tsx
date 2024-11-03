import swimming from "../assets/swimming.png";
import playGround from "../assets/playground.png";
import classRoom from "../assets/class.png";

function QZone() {
  return (
    <div className="w-full mt-8 bg-gray-500/10 py-4 rounded-lg">
      <h2 className="text-xl font-semibold mb-4 pl-5">Q-Zone</h2>
      <div className="w-full flex flex-col items-center justify-center ">
        <img src={swimming} alt="Swimming" className="w-full" />
        <img src={playGround} alt="Play ground" />
        <img src={classRoom} alt="Classroom" />
      </div>
    </div>
  );
}

export default QZone;
