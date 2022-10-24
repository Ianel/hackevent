import React from "react";
import { FaBell, FaEye, FaFolder } from "react-icons/fa";

const Services = () => {
  return (
    <section id="services" className="my-16">
      <h2 className="text-3xl text-primary text-center my-8">Nos services</h2>
      <div className="flex justify-center items-stretch gap-x-12 h-80">
        <div className="bg-white p-8 shadow-md w-72">
          <span className="text-4xl text-teal-800">
            <FaEye />
          </span>
          <h3 className="text-xl font-semibold my-6">
            Voyez les hackathons disponsibles
          </h3>
          <p className="text-gray-700">
            Consulter la liste des hackathons disponsibles dans tout Madagascar
            via notre plateforme
          </p>
        </div>
        <div className="bg-white p-6 shadow-md w-72 ">
          <span className="text-4xl text-teal-800">
            <FaFolder />
          </span>
          <h3 className="text-xl font-semibold my-6">
            Postulez aux hackathons de votre choix
          </h3>
          <p className="text-gray-700">
            Remplissez les formulaires pour pouvoir participer aux hackathons
            accessibles sur notre plateforme
          </p>
        </div>
        <div className="bg-white p-6 shadow-md w-72 ">
          <span className="text-4xl text-teal-800">
            <FaBell />
          </span>
          <h3 className="text-xl font-semibold my-6">
            Soyez notifiés du déroulés des hackathons
          </h3>
          <p className="text-gray-700">
            Consulter la liste des hackathons disponsibles dans tout Madagascar
            via notre plateforme
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
