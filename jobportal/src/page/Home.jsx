import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import FeaturedCompanies from "../components/FeaturedCompanies";
import RecentJobs from "../components/RecentJobs";
import Footer from "../components/Footer";
import heroBg from "../img/home.jpeg"; // background image for home

const Home = () => {
  return (
    <>
      <Header />
      <Hero
        title="Find Your Dream Job Today!"
        subtitle="Connecting Talent with Opportunity — Your Gateway to Career Success"
        bgImage={heroBg}
        // showSearch={true} // show the search bar on home
      />
      <Stats />
      <FeaturedCompanies />
      <RecentJobs />
      <Footer />
    </>
  );
};

export default Home;
