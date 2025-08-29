import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";
import useAuth from "../hooks/useAuth";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useGetEmployerJobsQuery,useDeleteJobMutation } from "../features/Jobs/jobsApiSlice";
import EmployerJobCard from "../components/EmployerComponent/EmployerCardJob"; // updated card with Edit/Delete/View buttons

const EmployerDashboard = () => {
  const navigate = useNavigate();
  const { username, userId } = useAuth();
  const [jobs, setJobs] = useState([]);
  const [applicationData, setApplicationData] = useState([]);
const [deleteJob, { isLoading: isDeleting }] = useDeleteJobMutation();
const { data: jobsData = { ids: [], entities: {} }, isLoading, isError, refetch } = useGetEmployerJobsQuery(userId);

useEffect(() => {
  if (jobsData && jobsData.ids.length > 0) {
    const jobsArray = jobsData.ids.map(id => jobsData.entities[id]);

    const mappedJobs = jobsArray.map(job => ({
      ...job,
      category: job.category || "N/A",
      jobType: job.jobType || "N/A",
      salary: job.salary || "0",
      applicants: job.applicants || 0,
      status: job.status || "active",
      posted: new Date(job.createdAt).toLocaleDateString(),
    }));

    setJobs(mappedJobs);

    // Chart data
    const chartData = mappedJobs.map(job => ({
      name: job.title,
      applicants: job.applicants,
    }));
    setApplicationData(chartData);
  }
}, [jobsData]);

  const handleCreateJob = () => navigate("/create/job");

  const handleViewApplicants = (jobId) => navigate(`/job-applicants/${jobId}`);

  const handleEditJob = (job) => navigate(`/edit-job/${job._id}`, { state: { job } });
 const handleDeleteJob = async (job) => {
    if (window.confirm("Are you sure you want to delete this job?")) {
      try {
        await deleteJob(job._id).unwrap();
        alert("Job deleted successfully!");
        refetch(); // Refresh job list after deletion
      } catch (err) {
        console.error("Failed to delete job:", err);
        alert("Failed to delete job. Please try again.");
      }
    }
  };
  if (isLoading) return (
    <>
      <Header />
      <div className="p-6 text-center">Loading jobs...</div>
      <Footer />
    </>
  );

  if (isError) return (
    <>
      <Header />
      <div className="p-6 text-center text-red-500">Failed to load jobs. Try again.</div>
      <Footer />
    </>
  );

  return (
    <>
      <Header />
      <div className="p-6 bg-gray-100 min-h-screen">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Welcome, {username}</h1>
          <button
            onClick={handleCreateJob}
            className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg font-medium transition"
          >
            Post New Job
          </button>
        </div>

        {/* Dashboard Stats */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="bg-white p-4 rounded-lg shadow text-center">
            <p className="text-gray-500">Total Jobs</p>
            <h2 className="text-2xl font-bold">{jobs.length}</h2>
          </div>
          <div className="bg-white p-4 rounded-lg shadow text-center">
            <p className="text-gray-500">Total Applicants</p>
            <h2 className="text-2xl font-bold">{jobs.reduce((sum, job) => sum + job.applicants, 0)}</h2>
          </div>
          <div className="bg-white p-4 rounded-lg shadow text-center">
            <p className="text-gray-500">Active Jobs</p>
            <h2 className="text-2xl font-bold">{jobs.length}</h2>
          </div>
        </div>

        {/* Applications Chart */}
        <div className="bg-white p-6 rounded-lg shadow mb-6">
          <h2 className="text-xl font-semibold mb-4">Applicants per Job</h2>
          {jobs.length === 0 ? (
            <p className="text-gray-500">No jobs posted yet.</p>
          ) : (
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={applicationData} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="applicants" fill="#34D399" />
              </BarChart>
            </ResponsiveContainer>
          )}
        </div>

        {/* Posted Jobs */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Your Posted Jobs</h2>
          {jobs.length === 0 ? (
            <p className="text-gray-500">You haven't posted any jobs yet.</p>
          ) : (
            jobs.map((job) => (
              <EmployerJobCard
                key={job._id}
                job={job}
                onEdit={handleEditJob}
                onDelete={handleDeleteJob}
              />
            ))
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default EmployerDashboard;
