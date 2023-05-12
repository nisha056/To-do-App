import { useState } from "react";
import axios from "axios";
import { Router, useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const navigate = useNavigate();

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  // axios.defaults.withCredentials = true;
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("first");
    axios
      .post("https://to-do-roek.onrender.com/user/login", {
        username:username,
        password:password,
      })
      .then((res) => {
        console.log(res);
        navigate("/home");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className=" bg-gray-700">
      <div className="flex flex-col items-center justify-center px-6 py-2  md:h-screen  ">
        <div className="w-full bg-gray-300 rounded-lg shadow dark:border py-8  sm:max-w-md  ">
          <div className="p-6">
            <form onSubmit={handleSubmit} className="space-y-3 md:space-y-4">
              <div>
                <label for="email" className=" text-sm font-medium text-gray">
                  Username
                </label>
                <input
                  onChange={handleUsername}
                  type="text"
                  name="username"
                  id="username"
                  className="bg-white  border-gray-300 text-black sm:text-sm rounded-lg   w-full p-2 "
                />
              </div>
              <div>
                <label
                  for="password"
                  className=" text-sm font-medium text-gray "
                >
                  
                  Password
                </label>
                <input
                  onChange={handlePassword}
                  type="password"
                  name-="password"
                  id="password"
                  className="bg-white border-gray-300 text-black sm:text-sm rounded-lg w-full p-2"
                />
              </div>
              <div>
                <button
                  type="submit "
                  className="bg-pink-400 rounded-lg font-medium mt-5 w-full p-2"
                >
                  Login
                </button>
              </div>
            </form>

            <div>
              <p className="font-medium mt-5 ">
                Didn't have an account?
                <a
                  href="/signup"
                  className=" font-medium text-blue-500 hover:underline inline-flex m-2 "
                >
                  Sign Up
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
