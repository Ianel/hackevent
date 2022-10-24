import React from "react";
import { FaPlus } from "react-icons/fa";
import { useSnapshot } from "valtio";
import { signOut } from "firebase/auth";
import { auth } from "../firebase.config";
import { Link, useLocation, useNavigate } from "react-router-dom";
import states from "../states";

const Navbar = () => {
  const location = useLocation().pathname;

  const snapshot = useSnapshot(states);

  let navigate = useNavigate();

  const isConnected = true;

  return (
    <nav className="flex justify-between items-center px-10 py-3 shadow-md">
      <Link to="/">
        <h1 className="text-2xl font-bold text-primary">Hackevent</h1>
      </Link>
      {/* <div className="flex items-center gap-x-4">
        {location == "/login" ||
        location == "/register" ||
        location == "/publish" ||
        location == "/hackathon" ? (
          <></>
        ) : (
          <>
            <Link className="text-gray-500" to="#about">
              A propos
            </Link>
            <Link className="text-gray-500" to="#services">
              Services
            </Link>
            <Link className="text-gray-500" to="#hackathons">
              Hackathons
            </Link>
            <Link className="text-gray-500" href="#contact">
              Contact
            </Link>
          </>
        )}
      </div> */}
      <div className="flex items-center gap-x-4">
        {isConnected && (
          <>
            <Link
              to="/publish"
              className="flex items-center justify-center gap-x-2 rounded-md border-2 border-transparent text-primary w-52 text-center py-2"
            >
              <span>
                <FaPlus />
              </span>
              <span>Publier une annonce</span>
            </Link>
          </>
        )}

        {snapshot.isConnected ? (
          <>
            <button
              onClick={(e) => {
                e.preventDefault();
                const logout = async () => {
                  await signOut(auth);
                  window.location.reload();
                };

                logout();
              }}
              className="bg-primary rounded-md border-2 border-transparent text-white w-28 text-center py-2"
            >
              Déconnexion
            </button>
          </>
        ) : (
          <Link
            to="/login"
            className="bg-primary rounded-md border-2 border-transparent text-white w-28 text-center py-2"
          >
            Connexion
          </Link>
        )}

        <Link
          to="/register"
          className="text-primary rounded-md border-2 border-primary w-28 text-center px-4 py-2"
        >
          Inscription
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
