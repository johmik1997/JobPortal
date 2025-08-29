import React from "react";
import EmployerJobCard from "./EmployerCardJob";
import { useNavigate } from "react-router-dom";
import {
  useGetEmployerJobsQuery,
  useDeleteJobMutation,
} from "../../features/Jobs/jobsApiSlice";

const PostedJobs = ({ userId, filters, setFilters }) => {
  const navigate = useNavigate();
  const { data: jobsData = [], isLoading, isError, refetch } =
    useGetEmployerJobsQuery(userId);

  const [deleteJob] = useDeleteJobMutation();

  // Map status string to boolean for filtering
  const filteredJobs = jobsData?.ids
    ? jobsData.ids
        .map((id) => jobsData.entities[id])
        .filter((job) => {
          if (!filters.status) return true;
          return filters.status === "active" ? job.status === true : job.status === false;
        })
    : [];

  if (isLoading) return <p>Loading jobs...</p>;
  if (isError) return <p>Failed to load jobs.</p>;

  // Handlers
  const handleEditJob = (job) => navigate(`/edit-job/${job._id}`, { state: { job } });

  const handleDelete = async (job) => {
    if (window.confirm(`Delete job "${job.title}"?`)) {
      try {
        await deleteJob(job._id).unwrap();
        alert("Job deleted!");
        refetch();
      } catch (err) {
        console.error(err);
        alert("Failed to delete job");
      }
    }
  };

  return (
    <div className="bg-white p-6 rounded shadow space-y-4">
      <h2 className="text-xl font-semibold">Your Posted Jobs</h2>

      <div className="flex justify-between items-center mb-4">
        <p className="text-gray-600 text-sm">
          Showing {filteredJobs.length} {filteredJobs.length === 1 ? "job" : "jobs"}
        </p>
        <select
          className="border border-gray-300 rounded px-3 py-2 text-sm"
          value={filters.status}
          onChange={(e) =>
            setFilters((prev) => ({ ...prev, status: e.target.value }))
          }
        >
          <option value="">All</option>
          <option value="active">Active</option>
          <option value="closed">Closed</option>
        </select>
      </div>

      <div className="space-y-4">
        {filteredJobs.map((job) => (
          <EmployerJobCard
            key={job._id}
            job={job}
            onEdit={handleEditJob}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
};

export default PostedJobs;
