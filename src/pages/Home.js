import React from "react";
import {Link} from "react-router-dom";

function Home() {
  return (
    <nav className="flex bg-gray-800 fixed w-full">
      <div className="flex w-full pt-0" id="nav-content">
        <div className="w-1/2 text-left">
          <Link className="inline-block text-lg py-2 px-5 text-white" href="/home">
            React
          </Link>
        </div>
        <div className="w-1/2 text-right">
          <Link className="inline-block py-2 px-10 text-white no-underline" to="/login">
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Home;
