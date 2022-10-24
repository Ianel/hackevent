import React from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-hot-toast";
import { auth } from "../../firebase.config";
import states from "../../states";
import { useSnapshot } from "valtio";

const Login = () => {
  let snapshot = useSnapshot(states);
  let navigate = useNavigate();

  const logInWithEmailAndPassword = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      states.isConnected = true;
    } catch (err) {
      states.isConnected = false;
      toast.error(err.message);
    } finally {
      if (snapshot.isConnected) {
        toast.success("Vous êtes connecté");
        setTimeout(() => {
          navigate("/publish");
        }, 2000);
      }
    }
  };

  return (
    <>
      {/* <script src="https://cdn.tailwindcss.com"></script> */}
      <section className="bg-[#F4F7FF] py-20 lg:py-[120px] min-h-[95vh]">
        <div className="container mx-auto">
          <div className="flex  flex-wrap -mx-4">
            <div className="w-full px-4">
              <div
                className="
               max-w-[525px]
               shadow-md
               mx-auto
               text-center
               bg-white
               rounded-lg
               relative
               overflow-hidden
               py-16
               px-10
               sm:px-12
               md:px-[60px]
               "
              >
                <form>
                  <div className="mb-6">
                    <h3 className="mb-8 text-3xl text-center">Se connecter</h3>
                    <input
                      onChange={(e) =>
                        (states.input["login_email"] = e.target.value)
                      }
                      type="text"
                      placeholder="Email"
                      className="
                        w-full
                        rounded-md
                        border
                        bordder-[#E9EDF4]
                        py-3
                        px-5
                        bg-[#FCFDFE]
                        text-base text-body-color
                        placeholder-[#ACB6BE]
                        outline-none
                        focus-visible:shadow-none
                        focus:border-primary
                        "
                    />
                  </div>
                  <div className="mb-6">
                    <input
                      onChange={(e) =>
                        (states.input["login_password"] = e.target.value)
                      }
                      type="password"
                      placeholder="Mot de passe"
                      className="
                        w-full
                        rounded-md
                        border
                        bordder-[#E9EDF4]
                        py-3
                        px-5
                        bg-[#FCFDFE]
                        text-base text-body-color
                        placeholder-[#ACB6BE]
                        outline-none
                        focus-visible:shadow-none
                        focus:border-primary
                        "
                    />
                  </div>
                  <div className="mb-10">
                    <input
                      type="submit"
                      value="Se connecter"
                      className="
                        w-full
                        rounded-md
                        border
                        bordder-primary
                        py-3
                        px-5
                        bg-primary
                        text-base text-white
                        cursor-pointer
                        hover:bg-opacity-90
                        transition
                        "
                      onClick={async (e) => {
                        e.preventDefault();
                        await logInWithEmailAndPassword(
                          snapshot.input["login_email"],
                          snapshot.input["login_password"]
                        );
                      }}
                    />
                  </div>
                </form>

                {/*  <a
                  href="javascript:void(0)"
                  className="
                  text-base
                  inline-block
                  mb-2
                  text-[#adadad]
                  hover:underline hover:text-primary
                  "
                >
                  Forget Password?
                </a> */}
                <p className="text-base text-[#adadad]">
                  Vous n'êtes pas encore membre ?
                  <Link
                    to="/register"
                    className="text-primary pl-2 hover:underline"
                  >
                    S'inscrire
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
