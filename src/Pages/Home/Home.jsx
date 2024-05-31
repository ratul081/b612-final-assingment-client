import React from "react";
import Breadcrumbs from "../../Components/Shared/Breadcrumbs";
import HomeBanner from "./HomeBanner/HomeBanner";
import Newsletter from "./Newsletter/Newsletter";
import Pagination from "../../Components/Shared/Pagination";
import JustForYou from "../Dashboard/Buyer/MyWhitelist/JustForYou";
import HomeCategory from "./HomeCategory/HomeCategory";

const Home = () => {
  return (
    <div>
      <HomeBanner></HomeBanner>
      <JustForYou></JustForYou>
      <HomeCategory></HomeCategory>
      <Newsletter></Newsletter>
      <Pagination></Pagination>
    </div>
  );
};

export default Home;
