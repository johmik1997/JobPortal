import React from "react";

const ApplicationModal = ({ application, onClose }) => {
  if (!application) return null;

  const job = application.job;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg max-w-xl w-full relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          ✖
        </button>
        <h2 className="text-2xl font-bold mb-2">{job?.title || application.jobTitle}</h2>
        <p className="text-gray-500 mb-1">Company: {job?.companyName || application.companyName}</p>
        <p className="text-gray-500 mb-1">Location: {job?.location || "N/A"}</p>
        <p className="text-gray-500 mb-1">Salary: {job?.salary || "N/A"}</p>
        <p className="text-gray-500 mb-1">Status: {application.status}</p>
        <p className="text-gray-400 mb-3">Applied on: {new Date(application.createdAt).toLocaleDateString()}</p>

        <h3 className="font-semibold mt-3">Resume:</h3>
        <a href={application.resume} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
          View Resume
        </a>

        {application.coverLetter && (
          <>
            <h3 className="font-semibold mt-3">Cover Letter:</h3>
            <p className="text-gray-700">{application.coverLetter}</p>
          </>
        )}

        {application.portfolio && (
          <>
            <h3 className="font-semibold mt-3">Portfolio:</h3>
            <a href={application.portfolio} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
              View Portfolio
            </a>
          </>
        )}
      </div>
    </div>
  );
};

export default ApplicationModal;
