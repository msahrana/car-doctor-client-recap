import {useEffect, useState} from "react";
import useAuth from "../../hooks/useAuth/useAuth";
import BookingRow from "./BookingRow";
import Img from "../../../public/assets/images/booking/booking.png";

const Booking = () => {
  const {user} = useAuth();
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/booking?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setBookings(data);
      });
  }, [user?.email]);

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
