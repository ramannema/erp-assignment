import React from "react";

const Button = (props) => {
  return (
    <button
      className={`bg-indigo-700 rounded-md font-normal md:font-medium  py-2 px-4 ${
        props.className ? props.className : ""
      }`}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
