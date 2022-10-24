import React from "react";

const Footer = () => {
  return (
    <div className="py-8 shadow-md text-center bg-primary text-white">
      &copy; Coyright {new Date(Date.now()).getFullYear()} || Tous droits
      réservés
    </div>
  );
};

export default Footer;
