import React from "react";
import { Link } from "react-router-dom";
import { hero } from "../assets/images";

const Card = ({ title, theme, organizators, description, id }) => {
  return (
    <Link to={`hackathon/${id}`}>
      <div className="shadow-md p-6 h-96 w-72 cursor-pointer border-2 border-transparent rounded-md hover:border-2 hover:border-primary">
        <img src={hero} className="rounded-sm mb-3" alt="Card" />
        <h4 className="text-gray-700 text-lg font-semibold">{title}</h4>
        <h5 className="italic text-primary">{theme}</h5>
        <h6 className="text-gray-500">
          <span className="text-gray-500 font-bold">By</span> {organizators}
        </h6>
        <p>{description.substring(0, 55) + "..."}</p>
      </div>
    </Link>
  );
};

export default Card;
