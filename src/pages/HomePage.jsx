import React from "react";
import Hero from "../components/Hero";
import HomeCard from "../components/HomeCard";
import JobListings from "../components/JobListings";
import ViewAllJobs from "../components/ViewAllJobs";
export default function HomePage() {
  return (
    <>
      <Hero />
      <HomeCard />
      <JobListings ishome={true} />
      <ViewAllJobs />
    </>
  );
}
