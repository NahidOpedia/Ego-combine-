import React from "react";
import Header from "../components/View/Header/Header";
import Breakdown from "../components/View/Breakdown/Breakdown";
import Roadmap from "../components/View/RoadMap/Roadmap";
import Specialities from "../components/View/Specialities/Specialities";
import Pancakeswap from "../components/View/Pancakeswap/Pancakeswap";
import Footer from "../components/View/Footer/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <Breakdown />
      <Roadmap />
      <Specialities />
      {/* <Questions/> */}
      <Pancakeswap />
      <Footer />
    </>
  );
};

export default Home;
