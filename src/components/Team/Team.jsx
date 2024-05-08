import team1 from "../../../public/assets/images/team/1.jpg";
import team2 from "../../../public/assets/images/team/2.jpg";
import team3 from "../../../public/assets/images/team/3.jpg";
import team from "../../../public/assets/images/team/team-group.png";

const Team = () => {
  return (
    <div className="mt-16">
      <div className="text-center w-1/2 mx-auto space-y-4 mb-10">
        <p className="text-[#FF3811] text-xl font-bold">Team</p>
        <h1 className="text-5xl font-bold">Meet Our Team</h1>
        <p>
          The majority have suffered alteration in some form, by injected
          humour, or randomized words which do not look even slightly
          believable.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <div className="border rounded-md p-5">
          <div className="text-center space-y-2 justify-center">
            <img className="rounded-md" src={team1} alt="" />
            <h1 className="text-2xl font-bold">Car Engine Plug</h1>
            <p className="font-semibold">Engine Expert</p>
            <img className="mx-auto" src={team} alt="" />
          </div>
        </div>
        <div className="border rounded-md p-5">
          <div className="text-center space-y-2 justify-center">
            <img className="rounded-md" src={team2} alt="" />
            <h1 className="text-2xl font-bold">Car Engine Plug</h1>
            <p className="font-semibold">Engine Expert</p>
            <img className="mx-auto" src={team} alt="" />
          </div>
        </div>
        <div className="border rounded-md p-5">
          <div className="text-center space-y-2 justify-center">
            <img className="rounded-md" src={team3} alt="" />
            <h1 className="text-2xl font-bold">Car Engine Plug</h1>
            <p className="font-semibold">Engine Expert</p>
            <img className="mx-auto" src={team} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
