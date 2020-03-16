import React from "react";

const Button = ({title, onClick, loading}) => {
  if (loading) {
    return (
      <button className="bg-gray-500 text-white font-bold py-2 px-4 rounded mx-2">
        loading...
      </button>
    );
  }
  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-2"
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default Button;
