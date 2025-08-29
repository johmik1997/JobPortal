import React from "react";
import { useNavigate } from "react-router-dom";
import { Briefcase, Clock, MapPin, DollarSign, BookOpen } from "lucide-react";
import useAuth from "../hooks/useAuth";

const JobHeader = ({ job }) => {
  const navigate = useNavigate(); 
  const { username, roles } = useAuth();

  const handleApply = () => {
    navigate(`/application/${job.id}`, { state: { jobId: job.id } });
  };

  const handleAddNewJob = () => {
    navigate("/create/job"); // navigate to job creation page
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow flex justify-between items-center mb-6">
      <div>
        <p className="text-sm text-gray-500">{job.posted}</p>
        <h1 className="text-2xl font-bold text-gray-800">{job.title}</h1>
        <p className="text-gray-600 mb-2">{job.companyName}</p>

        <div className="flex gap-4 text-sm text-gray-500">
          <span className="flex items-center gap-1">
            <Briefcase size={16} /> {job.category}
          </span>
          <span className="flex items-center gap-1">
            <Clock size={16} /> {job.jobType}
          </span>
          <span className="flex items-center gap-1">
            <DollarSign size={16} /> {job.salary}
          </span>
          <span className="flex items-center gap-1">
            <BookOpen size={16} /> {job.educationLevel}
          </span>
        </div>
      </div>

      <div className="flex gap-2">
        {roles.includes("Developer") && (
          <button
            onClick={handleApply}
            className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg font-medium transition"
          >
            Apply Job
          </button>
        )}

        {roles.includes("employer") && (
          <button
            onClick={handleAddNewJob}
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg font-medium transition"
          >
            Create New Job
          </button>
        )}
      </div>
    </div>
  );
};

export default JobHeader;
