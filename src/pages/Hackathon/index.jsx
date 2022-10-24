import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { collection, query, getDocs, where } from "firebase/firestore";
import { db } from "../../firebase.config";

const Hackathon = () => {
  const { id } = useParams();

  const ref = collection(db, "hackathons");

  const [singleHackathon, setSingleHackathon] = useState({});

  useEffect(() => {
    const getDatas = async () => {
      const q = query(ref, where("uid", "==", id));
      const result = await getDocs(q);

      result.docs.forEach((document) => setSingleHackathon(document.data()));
    };

    getDatas();
  }, []);

  return (
    <div className="mx-auto w-1/3 min-h-screen">
      <h1 className="pt-6  font-bold text-2xl">{singleHackathon.title}</h1>
      <div>
        <h2>
          sur le thème{" "}
          <span className="text-primary font-bold text-2xl">
            &laquo; {singleHackathon.theme} &raquo;
          </span>
        </h2>
        <h3>
          organisé par{" "}
          <span className="text-gray-500 font-bold text-lg">
            {singleHackathon.organizators}
          </span>
        </h3>
      </div>
      <div>
        <h2 className="mt-6 font-bold text-lg">Description: </h2>
        <h3>{singleHackathon.description}</h3>
      </div>
      <div>
        <h2 className="mt-6 font-bold text-lg">Lieu: </h2>
        <h3>{singleHackathon.place}</h3>
      </div>
      <div>
        <h2 className="mt-6 font-bold text-lg">Du: </h2>
        <h3>{new Date(singleHackathon.starting_date).toString()} </h3>
      </div>
      <div>
        <h2 className="mt-6 font-bold text-lg">Au: </h2>
        <h3>{new Date(singleHackathon.ending_date).toString()}</h3>
      </div>
      <div>
        <h2 className="mt-6 font-bold text-lg">Categorie: </h2>
        <h3>{singleHackathon.category}</h3>
      </div>
      <div>
        <h2 className="mt-6 font-bold text-lg">Nombre de participantss: </h2>
        <h3>{singleHackathon.number_participants} personnes</h3>
      </div>
      <div>
        <h2 className="mt-6 font-bold text-lg">Partenaires: </h2>
        <h3>{singleHackathon.partners}</h3>
      </div>
    </div>
  );
};

export default Hackathon;
