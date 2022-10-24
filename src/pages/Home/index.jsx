import React from "react";
import Contact from "../../components/Contact";
import Hackathons from "../../components/Hackathons";
import Header from "../../components/Header";
import Services from "../../components/Services";

const Home = () => {
  return (
    <section>
      <Header />
      <Services />
      <Hackathons />
      <Contact />
    </section>
  );
};

export default Home;
