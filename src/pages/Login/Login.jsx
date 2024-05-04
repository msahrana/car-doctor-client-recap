import {Link, useLocation, useNavigate} from "react-router-dom";
import Img from "../../../public/assets/images/login/login.svg";
import {useForm} from "react-hook-form";
import useAuth from "../../hooks/useAuth/useAuth";
import {useState} from "react";
import Swal from "sweetalert2";
import SocialLogin from "../SocialLogin/SocialLogin";
import axios from "axios";

const Login = () => {
  const {signIn} = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm();

  const onSubmit = (data) => {
    const {email, password} = data || {};

    setError("");
    signIn(email, password)
      .then((result) => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "User loggedIn successfully!",
          showConfirmButton: false,
          timer: 1500,
        });
        const loggedUser = result.user;
        console.log(loggedUser);
        const user = {email};
        axios
          .post("http://localhost:5000/jwt", user, {withCredentials: true})
          .then((res) => {
            console.log(res.data);
            if (register.data.success) {
              navigate(location?.state ? location.state : "/");
            }
          });
      })
      .catch((err) => {
        console.log(err);
        setError("email and password does not matched!");
      });
  };

  return (
    <div className="hero bg-base-100 my-7">
      <div className="hero-content flex-col lg:flex-row w-full">
        <div className="text-center lg:text-left w-1/2">
          <img src={Img} alt="" />
        </div>
        {/* login forms are downward */}
        <div className="w-full max-w-md p-8 space-y-3 rounded-xl border-2">
          <h1 className="text-2xl font-bold text-center">Please Login</h1>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="space-y-1 text-sm">
              <label htmlFor="email" className="block">
                Email
              </label>
              <input
                type="text"
                name="email"
                id="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 rounded-md border"
                {...register("email", {required: true})}
              />
              {errors.email && (
                <span className="text-red-400">Email is required</span>
              )}
            </div>
            <div className="space-y-1 text-sm">
              <label htmlFor="password" className="block">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                className="w-full px-4 py-3 rounded-md border"
                {...register("password", {required: true})}
              />
              {errors.password && (
                <span className="text-red-400">Password is required</span>
              )}
            </div>
            <button className="block w-full p-3 text-center text-white rounded-sm bg-[#FF3811]">
              Login
            </button>
          </form>
          {error && <p className="text-red-600">{error}</p>}
          <div className="flex items-center pt-4 space-x-1">
            <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
            <p className="px-3 text-sm dark:text-gray-600">
              Login with social accounts
            </p>
            <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
          </div>
          <SocialLogin></SocialLogin>
          <p className="text-xs text-center sm:px-6">
            Don`t have an account?
            <Link to="/register" className="text-[#FF3811] ml-4 font-semibold">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
