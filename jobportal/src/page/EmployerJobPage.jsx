import React, { useState } from "react";
import Footer from "../components/Footer";
import JobApplications from "../components/EmployerComponent/JobApplication";
import PostedJobs from "../components/EmployerComponent/PostedJobs";
import EmployerStats from "../components/EmployerComponent/EmployerStat";
import Hero from "../components/Hero";
import Header from "../components/Header";
import useAuth from "../hooks/useAuth"; // assuming you have an auth hook

const EmployerJobPage = () => {
  const { userId } = useAuth(); // get logged-in employer ID
  const [jobFilter, setJobFilter] = useState({
    title: "",
    status: "active",
  });

  return (
    <>
      <Header />
      <Hero
        title="Your Job Postings"
        subtitle="Manage and track all your job postings and applications"
      />

      <div className="min-h-screen flex bg-gray-50 p-6 space-x-6">
        {/* Left Sidebar: Stats */}
        {/* <EmployerStats /> */}

        {/* Main Content: Jobs & Applications */}
        <main className="flex-1 space-y-6">
          <PostedJobs
            userId={userId}
            filters={jobFilter}
            setFilters={setJobFilter}
          />
          <JobApplications userId={userId} 
           filters={jobFilter}
            setFilters={setJobFilter}/>
        </main>
      </div>

      <Footer />
    </>
  );
};

export default EmployerJobPage;
