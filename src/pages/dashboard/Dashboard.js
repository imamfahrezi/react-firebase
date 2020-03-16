import React from "react";
import {Link} from "react-router-dom";

function Dashboard() {
  return (
    <nav className="flex bg-gray-800 fixed w-full">
      <div className="flex w-full pt-0" id="nav-content">
        <div className="w-1/2 text-left">
          <Link className="inline-block text-lg py-2 px-5 text-white" to="/dashboard">
            Dashboard
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Dashboard;
