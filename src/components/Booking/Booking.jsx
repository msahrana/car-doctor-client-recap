import {useEffect, useState} from "react";
import useAuth from "../../hooks/useAuth/useAuth";
import BookingRow from "./BookingRow";
import Img from "../../../public/assets/images/booking/booking.png";
import useAxiosSecure from "../../hooks/useAxiosSecure/useAxiosSecure";

const Booking = () => {
  const {user} = useAuth();
  const [bookings, setBookings] = useState([]);
  const axiosSecure = useAxiosSecure();

  // const url = `https://car-doctor-server-recap-seven.vercel.app/booking?email=${user?.email}`
  const url = `/booking?email=${user?.email}`;

  useEffect(() => {
    if (user?.email) {
      axiosSecure.get(url).then((res) => {
        setBookings(res.data);
      });
    }
  }, [url, axiosSecure, user]);

  return (
    <div className="overflow-x-auto">
      <img src={Img} className="w-full h-44" alt="" />
      <h1 className="text-4xl font-bold text-center my-10">
        All Booking: {bookings.length}
      </h1>
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <th>Image</th>
            <th>Service</th>
            <th>Date</th>
            <th>Price</th>
            <th>Option</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking) => (
            <BookingRow
              key={booking._id}
              booking={booking}
              bookings={bookings}
              setBookings={setBookings}
            ></BookingRow>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Booking;
