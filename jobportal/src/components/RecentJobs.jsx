import React from "react";
import { Briefcase, Clock, MapPin, DollarSign, Bookmark } from "lucide-react";
import { useGetJobsQuery, selectAllJobs } from "../features/Jobs/jobsApiSlice";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const RecentJobs = () => {
  const { isLoading, isError } = useGetJobsQuery();
  const navigate = useNavigate();

  const jobs = useSelector(selectAllJobs);

  const handleJobDetails = (job) => {
    // Navigate with the selected job’s id
    navigate(`/jobs/${job.id}`, { state: { job } });
  };

  if (isLoading) return <p className="p-6 text-center">Loading jobs...</p>;
  if (isError) return <p className="p-6 text-center text-red-500">Failed to load jobs.</p>;

  return (
    <section className="py-12 bg-white container mx-auto px-4">
      <h2 className="text-3xl font-bold text-blue-900 mb-8">
        Recent Jobs Available
      </h2>

      <div className="space-y-6 ml-12">
        {jobs.map((job) => (
          <div
            key={job.id}
            className="flex items-center w-4/5 justify-between p-6 bg-white rounded-2xl shadow hover:shadow-lg transition"
          >
            <div className="flex items-start gap-4">
              <img
                src={job.logo || 'https://www.shutterstock.com/image-vector/circle-line-simple-design-logo-600nw-2174926871.jpg'}
                alt={job.company}
                className="w-24 h-20 rounded-full object-contain"
              />
              <div>
                <p className="text-sm text-green-600 font-medium">
                  {job.posted}
                </p>
                <h3 className="text-lg font-bold text-gray-800">{job.title}</h3>
                <p className="text-gray-500 mb-3">{job.company}</p>

                <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                  <span className="flex items-center gap-1">
                    <Briefcase size={16} /> {job.category}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={16} /> {job.jobType || job.type}
                  </span>
                  <span className="flex items-center gap-1">
                    <DollarSign size={16} /> {job.salary}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin size={16} /> {job.location}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <button
                onClick={() => handleJobDetails(job)}  // ✅ pass the single job
                className="bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-lg font-medium transition"
              >
                Job Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecentJobs;
