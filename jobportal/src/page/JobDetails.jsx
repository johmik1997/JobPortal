import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectJobById, selectAllJobs,useGetJobsQuery } from "../features/Jobs/jobsApiSlice";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import JobHeader from "../components/JobHeader";
import JobDescription from "../components/JobDescription";
import JobOverview from "../components/JobOverview";
import SendMessageForm from "../components/SendMessageForm";
import JobCard from "../components/JobCard";

const JobDetailsPage = () => {
  const { jobId } = useParams();
  const location = useLocation();

  // Always call hooks at the top level
  const jobFromStore = useSelector((state) => selectJobById(state, jobId));
  const allJobs = useSelector(selectAllJobs); // normalized array of jobs

  const [job, setJob] = useState(location.state?.job || jobFromStore || null);

  useEffect(() => {
    if (!job && jobFromStore) {
      setJob(jobFromStore);
    }
  }, [jobFromStore, job]);

  if (!job) {
    return (
      <>
        <Header />
        <Hero />
        <div className="container mx-auto px-4 py-8">
          <p>Loading job details...</p>
        </div>
        <Footer />
      </>
    );
  }

  // Filter related jobs if needed, excluding the current job
  const relatedJobs = allJobs.filter((j) => j.id !== job.id);

  return (
    <>
      <Header />
      <Hero
  title={job.title}
  subtitle={job.companyName}
  bgImage={job.featuredImage || require("../img/jobdetail-hero.jpeg")}
  details={`Location: ${job.location || "N/A"} | Type: ${job.jobType || "N/A"} | Salary: ${job.salary || "N/A"}`}
  showSearch={false}
/>

      <div className="container mx-auto px-4 py-8 flex flex-col lg:flex-row gap-6">
        <div className="flex-1">
          <JobHeader job={job} />
          <JobDescription
            description={job.jobDescription || ""}
            responsibilities={job.keyResponsibility || []}
            skills={job.requirementSkill || []}
          />
        </div>

        <div className="w-full lg:w-80 flex flex-col gap-6">
          <JobOverview job={job} />
          <SendMessageForm />
        </div>
      </div>

      {relatedJobs.length > 0 && (
        <div className="-mt-10 ml-12 ">
          <h1 className="px-6 text-2xl font-bold text-blue-500 mb-6">Related Jobs</h1>
          <div className="space-y-4">
            {relatedJobs.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>
        </div>
      )}

      <Footer />
    </>
  );
};

export default JobDetailsPage;
