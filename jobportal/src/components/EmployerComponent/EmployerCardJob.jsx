import React from "react";
import { Edit2, Trash2, Users, Clock, Eye } from "lucide-react";
import { useNavigate } from "react-router-dom";

const EmployerJobCard = ({ job, onEdit, onDelete }) => {
  const navigate = useNavigate();


const statusText = job.status ? "Active" : "Closed";
const statusColor = job.status ? "text-green-600" : "text-red-500";


  // Navigate to job details page
  const handleView = () => {
    navigate(`/jobs/${job._id}`, { state: { job } });
  };

  return (
    <div className="flex items-center justify-between p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
      {/* Left Section */}
      <div>
        <h3 className="text-lg font-bold text-gray-800">{job.title}</h3>
       <p className="text-gray-500 mb-2">
  Status:{" "}
  <span className={`font-medium ${statusColor}`}>
    {statusText}
  </span>
</p>

        <p className="text-gray-500 text-sm flex items-center gap-2">
          <Users size={16} /> {job.applicants || 0} applicant
          {job.applicants !== 1 ? "s" : ""}
        </p>
        {job.posted && (
          <p className="text-gray-400 text-xs flex items-center gap-1 mt-1">
            <Clock size={14} /> Posted on {job.posted}
          </p>
        )}
      </div>

      {/* Right Section: View/Edit/Delete */}
      <div className="flex items-center gap-3">
        <button
          onClick={handleView}
          className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-lg font-medium transition"
        >
          <Eye size={16} />
        </button>
        <button
          onClick={() => onEdit(job)}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg font-medium transition"
        >
          <Edit2 size={16} />
        </button>
        <button
          onClick={() => onDelete(job)}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg font-medium transition"
        >
          <Trash2 size={16} />
        </button>
      </div>
    </div>
  );
};

export default EmployerJobCard;
