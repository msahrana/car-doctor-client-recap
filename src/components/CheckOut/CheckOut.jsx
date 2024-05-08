import {useLoaderData} from "react-router-dom";
import useAuth from "../../hooks/useAuth/useAuth";
import Img from "../../../public/assets/images/checkout/checkout.png";
import Swal from "sweetalert2";

const CheckOut = () => {
  const service = useLoaderData();
  const {user} = useAuth();
  const {title, price, _id, img} = service || {};

  const handleBook = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const date = form.date.value;
    const email = user?.email;
    const massage = form.massage.value;
    const order = {
      customerName: name,
      email,
      date,
      img,
      service: title,
      service_id: _id,
      price: price,
      massage: massage,
    };
    console.log(order);
    fetch("https://car-doctor-server-recap-seven.vercel.app/booking", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your booking added successfully!",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <div>
      <div>
        <img className="w-full h-60" src={Img} alt="" />
      </div>
      <h1 className="text-4xl font-bold text-center my-6">Booking : {title}</h1>

      <form
        onSubmit={handleBook}
        className="w-full border-2 mx-auto rounded-lg p-20 bg-gray-100 mb-5"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Date</span>
            </label>
            <input
              type="date"
              placeholder="date"
              name="date"
              className="input input-bordered"
              required
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              defaultValue={user?.email}
              className="input input-bordered"
              required
              readOnly
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Deu Amount</span>
            </label>
            <input
              type="text"
              defaultValue={"$" + price}
              className="input input-bordered"
              required
            />
          </div>
        </div>
        <div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Massage</span>
            </label>
            <textarea
              className="textarea textarea-bordered"
              name="massage"
              placeholder="Massage"
            ></textarea>
          </div>
        </div>
        <div className="form-control mt-6">
          <input
            type="submit"
            className="btn bg-[#FF3811] text-xl text-white"
            value="Order Confirm"
          />
        </div>
      </form>
    </div>
  );
};

export default CheckOut;
