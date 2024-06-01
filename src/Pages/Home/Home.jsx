import React from "react";
import JustForYou from "../Dashboard/Buyer/MyWhitelist/JustForYou";
import HomeBanner from "./HomeBanner/HomeBanner";
import HomeCategory from "./HomeCategory/HomeCategory";
import Newsletter from "./Newsletter/Newsletter";

const Home = () => {
  return (
    <div>
      <HomeBanner></HomeBanner>
      <JustForYou></JustForYou>
      <HomeCategory></HomeCategory>
      <Newsletter></Newsletter>
    </div>
  );
};

export default Home;
