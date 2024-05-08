import img1 from "../../../public/assets/icons/group.svg";
import img2 from "../../../public/assets/icons/time.svg";
import img3 from "../../../public/assets/icons/person.svg";
import img4 from "../../../public/assets/icons/Wrench.svg";
import img5 from "../../../public/assets/icons/check.svg";
import img6 from "../../../public/assets/icons/delivery.svg";

const Features = () => {
  return (
    <div className="mt-20">
      <div className="text-center w-1/2 mx-auto space-y-4 mb-10">
        <p className="text-[#FF3811] text-xl font-bold">Core Features</p>
        <h1 className="text-5xl font-bold">Why Choose Us</h1>
        <p>
          The majority have suffered alteration in some form, by injected
          humour, or randomized words which don`t look even slightly believable.{" "}
        </p>
      </div>
      <div className="flex flex-col md:flex-row lg:flex-row mx-auto justify-around px-20">
        <div className="border rounded-md p-5">
          <img className="mx-auto" src={img1} alt="" />
          <p className="font-bold">Expert Team</p>
        </div>
        <div className="border rounded-md p-5 bg-[#FF3811]">
          <img className="mx-auto" src={img2} alt="" />
          <p className="font-bold text-white">Expert Team</p>
        </div>
        <div className="border rounded-md p-5">
          <img className="mx-auto" src={img3} alt="" />
          <p className="font-bold">Expert Team</p>
        </div>
        <div className="border rounded-md p-5">
          <img className="mx-auto" src={img4} alt="" />
          <p className="font-bold">Expert Team</p>
        </div>
        <div className="border rounded-md p-5">
          <img className="mx-auto" src={img5} alt="" />
          <p className="font-bold">Expert Team</p>
        </div>
        <div className="border rounded-md p-5">
          <img className="mx-auto" src={img6} alt="" />
          <p className="font-bold">Expert Team</p>
        </div>
      </div>
    </div>
  );
};

export default Features;
