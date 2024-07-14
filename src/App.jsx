import React from "react";
import NavBar from "./components/NavBar";
import HomeCard from "./components/HomeCard";
import Hero from "./components/Hero";
import JobListings from "./components/JobListings";
import ViewAllJobs from "./components/ViewAllJobs";

export default function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <HomeCard />
      <JobListings />
      <ViewAllJobs />
    </>
  );
}
