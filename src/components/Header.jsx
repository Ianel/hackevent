import React from "react";

const Header = () => {
  return (
    <section id="about">
      <div className="flex items-center pl-48 h-[95vh] bg-hero bg-cover ">
        <p className="text-4xl leading-[3.5rem] text-gray-700 bg-white py-3 px-4">
          Un site <span className="text-primary font-semibold">unique</span>{" "}
          pour voir et concourir
          <br /> aux plus grands hackathons à
          <span className="text-primary font-semibold"> Madagascar</span>
        </p>
      </div>
    </section>
  );
};

export default Header;
