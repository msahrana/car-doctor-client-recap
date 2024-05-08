import {Link} from "react-router-dom";
import Img from "../../../public/assets/images/login/login.svg";
import {useForm} from "react-hook-form";
import {useState} from "react";
import useAuth from "../../hooks/useAuth/useAuth";
import Swal from "sweetalert2";
import SocialLogin from "../SocialLogin/SocialLogin";

const Register = () => {
  const {createUser, user, setUser, updateUser} = useAuth() || {};
  const [error, setError] = useState("");

  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm();

  const onSubmit = (data) => {
    const {name, photoURL, email, password} = data;
    setError("");
    if (password.length < 8) {
      setError("Password should be at least 8 characters");
      return;
    } else if (
      !/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(
        password
      )
    ) {
      setError(
        "Password should have one uppercase, one lowercase, one digit & one special character"
      );
      return;
    }
    /* create user */
    createUser(email, password)
      .then((result) => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "User create successfully!",
          showConfirmButton: false,
          timer: 1500,
        });
        /* update user */
        updateUser(name, photoURL).then(() => {
          console.log(result.user);
          setUser({...user, displayName: name, photoURL: photoURL});
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="hero bg-base-100 my-7">
      <div className="hero-content flex-col lg:flex-row w-full">
        <div className="text-center lg:text-left w-1/2">
          <img src={Img} alt="" />
        </div>
        {/* Register forms are downward */}
        <div className="w-full max-w-md p-8 space-y-3 rounded-xl border-2">
          <h1 className="text-2xl font-bold text-center">Please Register</h1>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="space-y-1 text-sm">
              <label htmlFor="name" className="block">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-md border"
                {...register("name", {required: true})}
              />
              {errors.name && (
                <span className="text-red-500">Name is required</span>
              )}
            </div>
            <div className="space-y-1 text-sm">
              <label htmlFor="photoURL" className="block">
                PhotoURL
              </label>
              <input
                type="text"
                name="photoURL"
                id="photoURL"
                placeholder="Your PhotoURL"
                className="w-full px-4 py-3 rounded-md border"
                {...register("photoURL", {required: true})}
              />
            </div>
            {errors.photoURL && (
              <span className="text-red-500">PhotoURL is required</span>
            )}
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
            </div>
            {errors.email && (
              <span className="text-red-500">Email is required</span>
            )}
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
            </div>
            {errors.password && (
              <span className="text-red-500">Password is required</span>
            )}
            <button className="block w-full p-3 text-center text-white rounded-sm bg-[#FF3811]">
              Register
            </button>
          </form>
          {error && <p className="text-red-600">{error}</p>}
          <div className="flex items-center pt-4 space-x-1">
            <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
            <p className="px-3 text-sm dark:text-gray-600">
              Register with social accounts
            </p>
            <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
          </div>
          <SocialLogin></SocialLogin>
          <p className="text-xs text-center sm:px-6">
            Already have an account?
            <Link to="/login" className="text-[#FF3811] ml-4 font-semibold">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
