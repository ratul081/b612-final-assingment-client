import React from "react";
import AboutBanner from "./AboutBanner";
import MilestoneAchievement from "./MilestoneAchievement";
import ServicesInfo from "./ServicesInfo";
import Team from "./Team";
import { Helmet } from "react-helmet-async";

const About = () => {
  return (
    <div className="m-6">
      <Helmet>
        <title>Use ME | About</title>
      </Helmet>
      <AboutBanner></AboutBanner>
      <MilestoneAchievement></MilestoneAchievement>
      <Team></Team>
      <ServicesInfo></ServicesInfo>
    </div>
  );
};

export default About;
