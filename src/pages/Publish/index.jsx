import React from "react";
import { addDoc, collection } from "firebase/firestore";
import { useSnapshot } from "valtio";
import { toast } from "react-hot-toast";
import uniqid from "uniqid";
import { db } from "../../firebase.config";
import states from "../../states";
import { useNavigate } from "react-router-dom";

const Publish = () => {
  let snapshot = useSnapshot(states);
  let isPublished = false;
  let navigate = useNavigate();

  const publishHackathonOnFirebase = async (
    title,
    theme,
    category,
    place,
    starting_date,
    ending_date,
    number_participants,
    partners,
    organizators,
    description
  ) => {
    try {
      await addDoc(collection(db, "hackathons"), {
        uid: uniqid(),
        title,
        category,
        theme,
        place,
        starting_date,
        ending_date,
        number_participants,
        partners,
        organizators,
        description,
      });
      isPublished = true;
    } catch (err) {
      toast.err(err.message);
    } finally {
      if (isPublished) {
        toast.success("Publié");
        navigate("/");
      }
    }
  };

  return (
    <div className="bg-grey-lighter min-h-screen flex flex-col bg-gradient-to-br from-sky-50 to-gray-200 py-8">
      <div className="container max-w-lg mx-auto flex-1 flex flex-col items-center justify-center px-2">
        <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
          <h1 className="mb-8 text-3xl text-center">
            Publier une annonce d'hackathon
          </h1>
          <h2 className="text-gray-500 text-center mb-4">
            Assurez-vous de l'exactitude des informations. Vous ne pourrez plus
            les modifier
          </h2>
          <input
            type="text"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            onChange={(e) => {
              states.input["hack_title"] = e.target.value;
            }}
            placeholder="Titre"
          />
          <input
            type="text"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            onChange={(e) => {
              states.input["hack_theme"] = e.target.value;
            }}
            placeholder="Thème A, Thème 2"
          />
          <div className="mb-4">
            <label>Catégories d'hackathon</label>
            <br />
            <label htmlFor="">
              <input
                type="radio"
                name="type"
                id="online"
                value="En ligne"
                onChange={(e) => {
                  states.input["hack_type"] = e.target.value;
                }}
              />
              <span className="pl-3">En ligne</span>
            </label>
            <label className="pl-3" htmlFor="">
              <input
                type="radio"
                name="type"
                id="offline"
                value="Présentiel"
                onChange={(e) => {
                  states.input["hack_type"] = e.target.value;
                }}
              />
              <span className="pl-3">Présentiel</span>
            </label>
          </div>

          <input
            type="text"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            onChange={(e) => {
              states.input["hack_place"] = e.target.value;
            }}
            placeholder="Lieu"
          />

          <label htmlFor="">
            Date de début
            <input
              type="datetime-local"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              onChange={(e) => {
                states.input["hack_starting_date"] = e.target.value;
              }}
            />
          </label>
          <label htmlFor="">
            Date de fin
            <input
              type="datetime-local"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              onChange={(e) => {
                states.input["hack_ending_date"] = e.target.value;
              }}
            />
          </label>

          <input
            type="number"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            onChange={(e) => {
              states.input["hack_number_participants"] = e.target.value;
            }}
            placeholder="Nombre de places"
          />
          <input
            type="text"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            onChange={(e) => {
              states.input["hack_partners"] = e.target.value;
            }}
            placeholder="Partenaire 1, Partenaire 2"
          />
          <input
            type="text"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            onChange={(e) => {
              states.input["hack_organizators"] = e.target.value;
            }}
            placeholder="Organizateur 1, Organizateur 2"
          />
          <textarea
            className="block border border-grey-light w-full p-3 rounded mb-4"
            placeholder="Description"
            onChange={(e) => {
              states.input["hack_description"] = e.target.value;
            }}
          ></textarea>

          <button
            onClick={async (e) => {
              e.preventDefault();
              await publishHackathonOnFirebase(
                snapshot.input["hack_title"],
                snapshot.input["hack_theme"],
                snapshot.input["hack_type"],
                snapshot.input["hack_place"],
                snapshot.input["hack_starting_date"],
                snapshot.input["hack_ending_date"],
                snapshot.input["hack_number_participants"],
                snapshot.input["hack_partners"],
                snapshot.input["hack_organizators"],
                snapshot.input["hack_description"]
              );
            }}
            type="submit"
            className="w-full text-center py-3 rounded bg-primary text-white hover:bg-green-dark focus:outline-none my-1"
          >
            Créer une annonce
          </button>
        </div>
      </div>
    </div>
  );
};

export default Publish;
