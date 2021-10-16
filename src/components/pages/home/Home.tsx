import React from "react";
import Intro from "./Intro";
import LastGames from "./LastGames";
import OurCompany from "./OurCompany";

const Home: React.FC = () => {
  return (
    <div>
      <Intro />
      <LastGames />
      <OurCompany />
    </div>
  );
};

export default Home;
