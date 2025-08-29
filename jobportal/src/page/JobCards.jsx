import React from "react";

const JobCard = ({ job, onView }) => {
  const jobTitle = job.job?.title || job.jobTitle || "N/A";
  const companyName = job.job?.companyName || job.companyName || "N/A";
  const salary = job.job?.salary || job.salary || "0";
  const location = job.job?.location || "N/A";
  const status = job.status || "pending";
  const appliedOn = job.appliedOn || new Date(job.createdAt).toLocaleDateString();

  return (
    <div className="bg-white p-4 mb-4 rounded-lg shadow flex justify-between items-center">
      <div>
        <h3 className="text-lg font-semibold">{jobTitle}</h3>
        <p className="text-gray-500">{companyName}</p>
        <p className="text-gray-500">Salary: {salary}</p>
        <p className="text-gray-500">Location: {location}</p>
        <p className="text-gray-500">Status: {status.charAt(0).toUpperCase() + status.slice(1)}</p>
        <p className="text-gray-400 text-sm">Applied on: {appliedOn}</p>
      </div>
      <button
        onClick={onView}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        View
      </button>
    </div>
  );
};

export default JobCard;
