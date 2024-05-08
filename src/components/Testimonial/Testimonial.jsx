import person1 from "../../../public/assets/images/testimonial/person-1.png";
import person2 from "../../../public/assets/images/testimonial/person-2.png";
import quote from "../../../public/assets/images/testimonial/quote.svg";

const Testimonial = () => {
  return (
    <div className="my-20">
      <div className="text-center w-1/2 mx-auto space-y-4 mb-10">
        <p className="text-[#FF3811] text-xl font-bold">Testimonial</p>
        <h1 className="text-5xl font-bold">What Customer Says</h1>
        <p>
          The majority have suffered alteration in some form, by injected
          humour, or randomized words which don`t look even slightly believable.{" "}
        </p>
      </div>
      <div className="flex flex-col md:flex-row lg:flex-row space-x-10">
        <div className="w-1/2 border rounded-md p-8">
          <div className="flex ">
            <img src={person1} alt="" />
            <div className="ml-20">
              <h1 className="text-xl font-bold">Sayed Rana</h1>
              <p className="mt-2">Businessman</p>
            </div>
            <img className="size-10 ml-64" src={quote} alt="" />
          </div>
          <p className="text-justify mt-6">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomized words which do not look even slightly
            believable.
          </p>
          <div className="rating mt-6">
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
              checked
            />
          </div>
        </div>
        <div className="w-1/2 border rounded-md p-8">
          <div className="flex ">
            <img src={person2} alt="" />
            <div className="ml-20">
              <h1 className="text-xl font-bold">Harunur Rashid</h1>
              <p className="mt-2">Doctor</p>
            </div>
            <img className="size-10 ml-64" src={quote} alt="" />
          </div>
          <p className="text-justify mt-6">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomized words which do not look even slightly
            believable.
          </p>
          <div className="rating mt-6">
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
              checked
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
