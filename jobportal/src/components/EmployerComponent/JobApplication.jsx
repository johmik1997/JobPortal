import React, { useState } from "react";
import { useGetEmployerApplicationsQuery, useUpdateApplicationStatusMutation } from "../../features/applications/applicationApiSlice";
import { useNavigate } from "react-router-dom";

const JobApplications = ({ userId }) => {
  const { data: applications = [], isLoading, isError } = useGetEmployerApplicationsQuery(userId);
  const [updateStatus] = useUpdateApplicationStatusMutation();
  const navigate = useNavigate();

  const handleView = (app) => {
    navigate(`/applications/${app.id}`, { state: { application: app } });
  };

  const handleStatusChange = async (appId, newStatus) => {
    try {
      await updateStatus({ id: appId, status: newStatus }).unwrap();
      alert(`Application status updated to ${newStatus}`);
    } catch (err) {
      console.error(err);
      alert("Failed to update status");
    }
  };

  if (isLoading) return <p>Loading applications...</p>;
  if (isError) return <p>Failed to load applications.</p>;
  if (!applications.length) return <p>No applications yet.</p>;

  return (
    <div className="bg-white p-6 rounded shadow space-y-4">
      <h2 className="text-xl font-semibold">Applications Received</h2>
      <table className="min-w-full text-left border">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2">Job Title</th>
            <th className="px-4 py-2">Applicant</th>
            <th className="px-4 py-2">Status</th>
            <th className="px-4 py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {applications.map((app) => (
            <tr key={app.id} className="border-t">
              <td className="px-4 py-2">{app.jobTitle}</td>
              <td className="px-4 py-2">{app.applicant}</td>
              <td className="px-4 py-2">{app.status}</td>
              <td className="px-4 py-2 flex gap-2">
                <button
                  onClick={() => handleView(app)}
                  className="bg-blue-600 text-white px-3 py-1 rounded text-sm"
                >
                  View
                </button>

                <select
                  value={app.status}
                  onChange={(e) => handleStatusChange(app.id, e.target.value)}
                  className="border px-2 py-1 rounded text-sm"
                >
                  <option value="applied">Applied</option>
                  <option value="shortlisted">Shortlisted</option>
                  <option value="rejected">Rejected</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default JobApplications;
