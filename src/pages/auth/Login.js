import React from "react";
import {Link} from "react-router-dom";

function Login() {
  return (
    <div className="container ">
      <div className="flex max-w-sm mx-auto flex-col bg-gray-200 mt-4">
        <div className="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
          <input
            className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
            type="email"
            placeholder="jane@example.com"
          />
          <input
            className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal mt-2"
            type="password"
            placeholder="password"
          />
        </div>
        <div className="flex-row text-center mb-2">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-2">
            Signin
          </button>
          <Link
            to="/register"
            className="bg-white hover:bg-blue-700 text-gray-600 font-bold py-2 px-4 rounded mx-2"
          >
            Go to Signup
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
