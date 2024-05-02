import image1 from "../../../public/assets/info/group.png";
import image2 from "../../../public/assets/info/phone.png";
import image3 from "../../../public/assets/info/location.png";

const Contact = () => {
  return (
    <div className="bg-black h-[200px] flex justify-between items-center px-20 text-white mt-6 mb-16 rounded-lg">
      <div className="flex items-center gap-4 py-10">
        <div>
          <img src={image1} alt="" />
        </div>
        <div>
          <p>We are open monday-friday</p>
          <h1 className="text-2xl font-semibold">7:00 am - 9:00 pm</h1>
        </div>
      </div>
      <div className="flex items-center gap-4 py-10">
        <div>
          <img src={image2} alt="" />
        </div>
        <div>
          <p>Have a question?</p>
          <h1 className="text-2xl font-semibold">+2546 251 2658</h1>
        </div>
      </div>
      <div className="flex items-center gap-4 py-10">
        <div>
          <img src={image3} alt="" />
        </div>
        <div>
          <p>Need a repair? our address</p>
          <h1 className="text-2xl font-semibold">Liza Street, New York</h1>
        </div>
      </div>
    </div>
  );
};

export default Contact;
