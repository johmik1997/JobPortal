import React from "react";
import { Briefcase, Clock, MapPin, DollarSign } from "lucide-react";
import { useNavigate } from "react-router-dom";

const JobCard = ({ job }) => {
  const navigate = useNavigate();

  const handleJobDetails = () => {
    if (!job || !job._id) return;
    navigate(`/jobs/${job._id}`, { state: { job } });
  };

  // Calculate how many hours ago the job was updated
  const hoursAgo = job.updatedAt
    ? Math.floor((new Date() - new Date(job.updatedAt)) / (1000 * 60 * 60))
    : null;

  return (
    <div className="flex flex-col md:flex-row md:items-center w-full md:w-4/6 justify-between p-4 md:p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
      {/* Left Section */}
      <div className="flex flex-col md:flex-row items-start md:items-center gap-4 w-full">
        {job.logo && (
          <img
            src={
              job.logo ||
              "https://via.placeholder.com/100x100.png?text=Logo"
            }
            alt={job.company}
            className="w-16 h-16 md:w-24 md:h-20 rounded-full object-contain"
          />
        )}

        <div className="flex-1">
          {hoursAgo !== null && (
            <p className="text-sm text-green-600 font-medium mb-1">
              {`before ${hoursAgo} hours ago`}
            </p>
          )}

          <h3 className="text-lg md:text-xl font-bold text-gray-800">
            {job.title}
          </h3>
          <p className="text-gray-500 mb-3">{job.companyName}</p>

          {/* Meta Info */}
          <div className="flex flex-wrap gap-3 text-sm text-gray-600">
            {job.category && (
              <span className="flex items-center gap-1">
                <Briefcase size={16} /> {job.category}
              </span>
            )}
            {job.type && (
              <span className="flex items-center gap-1">
                <Clock size={16} /> {job.type}
              </span>
            )}
            {job.salary && (
              <span className="flex items-center gap-1">
                <DollarSign size={16} /> {job.salary}
              </span>
            )}
            {job.location && (
              <span className="flex items-center gap-1">
                <MapPin size={16} /> {job.location}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="mt-4 md:mt-0 flex justify-start md:justify-end">
        <button
          onClick={() => handleJobDetails(job)}
          className="bg-green-500 hover:bg-green-600 text-white px-4 md:px-5 py-2 rounded-lg font-medium transition w-full md:w-auto"
        >
          Job Details
        </button>
      </div>
    </div>
  );
};

export default JobCard;
