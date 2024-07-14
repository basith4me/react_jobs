import React from "react";
import jobs from "../jobs.json";
import JobListing from "./JobListing";

export default function JobListings({ ishome = false }) {
  //used slice method to only show first three elements in the json array
  const jobListing = ishome ? jobs.slice(0, 3) : jobs;
  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          {ishome ? "Recent Jobs" : "Browse Jobs"}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {jobListing.map((job) => (
            <JobListing job={job} key={job.id} />
          ))}
        </div>
      </div>
    </section>
  );
}
