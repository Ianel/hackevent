import React, { useEffect, useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase.config";
import Card from "./Card";

const Hackathons = () => {
  const [hackathonsFromFirebase, setHackathonsFromFirebase] = useState([]);
  const [categoryTitle, setCategoryTitle] = useState("Tous");

  const categories = [
    { title: "Tous", active: true },
    { title: "En ligne", active: false },
    { title: "Présentiel", active: false },
  ];

  useEffect(() => {
    const getDatas = async () => {
      const querySnapshot = await getDocs(collection(db, "hackathons"));
      setHackathonsFromFirebase(querySnapshot.docs);
    };
    getDatas();
  }, []);

  useEffect(() => {
    const getDatasByCategory = async () => {
      const q = query(ref, where("category", "==", categoryTitle));
      const result = await getDocs(q);

      result.docs.forEach((document) => console.log(document.data()));

      getDatasByCategory();
    };
  }, []);

  return (
    <section id="hackathons" className="my-16">
      <h2 className="text-3xl text-center my-8 text-primary">Hackathons</h2>
      <div className="my-8 flex flex-row justify-center items-center gap-x-8">
        {categories.map((category, index) => {
          return (
            <button
              onClick={() => {
                setCategoryTitle(category.title);
              }}
              key={index * new Date()}
              className={
                category.active
                  ? "text-white bg-primary px-4 py-2 rounded-md w-32"
                  : "text-primary font-bold bg-accent px-4 py-2 w-32 rounded-md hover:text-white hover:bg-primary"
              }
            >
              {category.title}
            </button>
          );
        })}
      </div>
      <div className="flex flex-row justify-center items-stretch gap-x-8">
        {categoryTitle == "Tous"
          ? hackathonsFromFirebase.map((hackathon) => {
              return (
                <Card
                  key={hackathon.data().uid}
                  title={hackathon.data().title}
                  theme={hackathon.data().theme}
                  organizators={hackathon.data().organizators}
                  description={hackathon.data().description}
                  id={hackathon.data().uid}
                />
              );
            })
          : hackathonsFromFirebase
              .filter((hack) => hack.data().category == categoryTitle)
              .map((hackathon) => {
                return (
                  <Card
                    key={hackathon.data().uid}
                    title={hackathon.data().title}
                    theme={hackathon.data().theme}
                    organizators={hackathon.data().organizators}
                    description={hackathon.data().description}
                    id={hackathon.data().uid}
                  />
                );
              })}
      </div>
    </section>
  );
};

export default Hackathons;
