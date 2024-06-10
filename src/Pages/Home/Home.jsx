import React from "react";
import JustForYou from "../Dashboard/Buyer/MyWhitelist/JustForYou";
import HomeBanner from "./HomeBanner/HomeBanner";
import HomeCategory from "./HomeCategory/HomeCategory";
import Newsletter from "./Newsletter/Newsletter";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Use ME | Home</title>
      </Helmet>
      <HomeBanner></HomeBanner>
      <JustForYou></JustForYou>
      <HomeCategory></HomeCategory>
      <Newsletter></Newsletter>
    </div>
  );
};

export default Home;
