import React, { useState } from "react";
import { useGetFilteredJobsQuery } from "../features/Jobs/jobFilterApi";
import JobFilters from "../components/JobFilter";
import JobCard from "../components/JobCard";
import Hero from "../components/Hero";
import Header from "../components/Header";
import Footer from "../components/Footer";

const JobPage = () => {
  // 🔍 Track filters in state
  const [filters, setFilters] = useState({
    title: "",
    location: "",
    category: "",
    jobType: "",
    experience: "",
  });

  // Call backend with filters
  const { data: jobs = [], isLoading, isError } = useGetFilteredJobsQuery(filters);

  return (
    <>
      <Header />
      <Hero
  title="Find Your Dream Job Today!"
  subtitle="Connecting Talent with Opportunity — Your Gateway to Career Success"
  bgImage={require("../img/job.jpeg")}
  // showSearch={true}
/>

      <div className="min-h-screen flex bg-gray-50 ml-10">
        {/* Left Sidebar */}
        <JobFilters filters={filters} setFilters={setFilters} />

        {/* Job List */}
        <main className="flex-1 p-6">
          <div className="flex justify-between items-center mb-4">
            <p className="text-gray-600 text-sm">
              Showing {jobs.length} {jobs.length === 1 ? "job" : "jobs"}
            </p>
            <select className="border border-gray-300 rounded px-3 py-2 text-sm">
              <option>Sort by latest</option>
              <option>Sort by salary</option>
              <option>Sort by location</option>
            </select>
          </div>

          {isLoading && <p>Loading jobs...</p>}
          {isError && <p className="text-red-500">Error fetching jobs.</p>}
          {!isLoading && jobs.length === 0 && <p>No jobs found.</p>}

          <div className="space-y-4 ml-12">
            {jobs.map((job) => (
              <JobCard key={job._id} job={job} />
            ))}
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default JobPage;
