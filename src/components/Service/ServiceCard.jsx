import {FaArrowRightLong} from "react-icons/fa6";
import {Link} from "react-router-dom";

const ServiceCard = ({service}) => {
  const {title, img, price, _id} = service || {};

  return (
    <div className="card w-full bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={img} alt="Shoes" className="rounded-xl w-full h-[250px]" />
      </figure>
      <div className="px-10 pt-3 space-y-2 mb-6">
        <h2 className="text-2xl font-bold">{title}</h2>
        <div className="flex justify-between text-[#FF3811] text-xl font-bold">
          <p>Price: ${price}</p>
          <Link to={`/checkout/${_id}`}>
            <FaArrowRightLong />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
