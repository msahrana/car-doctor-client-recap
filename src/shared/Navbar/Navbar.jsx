import {Link, NavLink} from "react-router-dom";
import logo from "../../../public/assets/logo.svg";
import useAuth from "../../hooks/useAuth/useAuth";
import Swal from "sweetalert2";

const Navbar = () => {
  const {user, logOut} = useAuth();

  const handleLogOut = () => {
    logOut().then(Swal.fire("User Logout Successfully!")).then();
  };

  const navLinks = (
    <>
      <li>
        <NavLink
          className={({isActive}) => (isActive ? "bg-red-500 text-white" : "")}
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({isActive}) => (isActive ? "bg-red-500 text-white" : "")}
          to="/about"
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({isActive}) => (isActive ? "bg-red-500 text-white" : "")}
          to="/services"
        >
          Services
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({isActive}) => (isActive ? "bg-red-500 text-white" : "")}
          to="/blog"
        >
          Blog
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({isActive}) => (isActive ? "bg-red-500 text-white" : "")}
          to="/contact"
        >
          Contact
        </NavLink>
      </li>
      {user ? (
        <li>
          <NavLink
            className={({isActive}) =>
              isActive ? "bg-red-500 text-white" : ""
            }
            to="/booking"
          >
            My Booking
          </NavLink>
        </li>
      ) : (
        ""
      )}
    </>
  );

  return (
    <div className="navbar bg-base-100 h-28 mb-4">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost text-xl">
          <img src={logo} alt="" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <div className="hidden md:flex lg:flex">
            <div className="tooltip" data-tip={user?.displayName}>
              <img className="size-10 rounded-full mr-2" src={user?.photoURL} />
            </div>
            <button
              onClick={handleLogOut}
              className="bg-red-400 px-3 py-1 rounded-xl text-white"
            >
              LogOut
            </button>
          </div>
        ) : (
          <Link to="/login" className="btn btn-secondary">
            Login
          </Link>
        )}
        <a className="btn btn-outline btn-warning">Appointment</a>
      </div>
    </div>
  );
};

export default Navbar;
