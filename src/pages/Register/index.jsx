import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSnapshot } from "valtio";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { addDoc, collection } from "firebase/firestore";
import { toast } from "react-hot-toast";
import { auth, db } from "../../firebase.config";
import states from "../../states";

const Register = () => {
  let snapshot = useSnapshot(states);
  let navigate = useNavigate();

  const registerWithEmailAndPassword = async (fullname, email, password) => {
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      const user = res.user;
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        fullname,
        authProvider: "local",
        email,
      });
      if (res?.user?.uid) toast.success("Compte crée");
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };

  return (
    <div className="bg-grey-lighter min-h-screen flex flex-col bg-gradient-to-br from-sky-50 to-gray-200">
      <div className="container max-w-lg mx-auto flex-1 flex flex-col items-center justify-center">
        <div className="bg-white p-[50px] rounded shadow-md text-black w-full">
          <h1 className="mb-8 text-3xl text-center">S'inscrire</h1>
          <input
            autoComplete="true"
            type="text"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            onChange={(e) =>
              (states.input["register_fullname"] = e.target.value)
            }
            placeholder="Nom complet"
          />

          <input
            autoComplete="true"
            type="text"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            onChange={(e) => (states.input["register_email"] = e.target.value)}
            placeholder="Email"
          />

          <input
            autoComplete="true"
            type="password"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            onChange={(e) =>
              (states.input["register_password"] = e.target.value)
            }
            placeholder="Mot de passe"
          />
          {/*  <input
            type="password"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="confirm_password"
            placeholder="Confirmer mot de passe"
          /> */}

          <button
            type="submit"
            className="w-full text-center py-3 rounded bg-primary text-white hover:bg-green-dark focus:outline-none my-1"
            onClick={async () => {
              await registerWithEmailAndPassword(
                snapshot.input["register_fullname"],
                snapshot.input["register_email"],
                snapshot.input["register_password"]
              );

              navigate("/login");
            }}
          >
            Créer un compte
          </button>
        </div>

        <div className="text-grey-dark mt-6">
          Vous avez déjà un compte ?
          <Link
            className="no-underline border-b border-blue text-blue"
            to="/login"
          >
            <span className="pl-1 text-primary font-semibold">
              Se connecter
            </span>
          </Link>
          .
        </div>
      </div>
    </div>
  );
};

export default Register;
