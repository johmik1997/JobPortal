import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectJobById, useGetJobsQuery,useUpdateJobMutation } from "../features/Jobs/jobsApiSlice";
import Header from "../components/Header";
import Footer from "../components/Footer";

const EditJobPage = () => {
 const { id } = useParams();
const navigate = useNavigate();

// Always call hooks first
const { data: jobsData, isLoading: jobsLoading } = useGetJobsQuery();
const job = useSelector((state) => selectJobById(state, id));
const [formData, setFormData] = useState({
  title: "",
  description: "",
  status: "active",
});
const [updateJob, { isLoading }] = useUpdateJobMutation();

useEffect(() => {
  if (job) {
    setFormData({
      title: job.title || "",
      jobDescription: job.jobDescription || "",
      companyName:job.companyName,
      educationLevel:job.educationLevel,
      location:job.location,
      experience:job.experience,
      keyResponsibility:job.keyResponsibility,
      requirementSkill:job.requirementSkill,
    status: job.status ?? true,

    });
  }
}, [job]);

if (jobsLoading) return <p>Loading...</p>;
if (!job) return <p className="p-6">Job not found.</p>;


  const handleChange = (e) => {
    const { name, value } = e.target;
     if (name === "status") {
    setFormData((prev) => ({
      ...prev,
      status: value === "active", // "active" -> true, "closed" -> false
    }));
  } else {
    setFormData((prev) => ({ ...prev, [name]: value }));
  }
    // setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateJob({ id, ...formData }).unwrap();
      alert("Job updated successfully!");
      navigate("/employer/job"); // go back to employer dashboard
    } catch (err) {
      console.error(err);
      alert("Failed to update job.");
    }
  };

  return (
    <>
    <Header/>
    <div className="max-w-2xl mx-auto p-6 bg-white rounded shadow">
      <h2 className="text-xl font-bold mb-4">Edit Job</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Title */}
        <div>
          <label className="block mb-1 text-sm font-medium">Job Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
            required
          />
        </div>

      
  {/* Company */}
        <div>
          <label className="block mb-1 font-medium">Company Name</label>
          <input
            type="text"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            required
            className="w-full border px-3 py-2 rounded-lg focus:ring focus:ring-indigo-400"
          />
        </div>

        {/* Salary */}
        <div>
          <label className="block mb-1 font-medium">Salary</label>
          <input
            type="text"
            name="salary"
            value={formData.salary}
            onChange={handleChange}
            placeholder="$50,000 / year"
            className="w-full border px-3 py-2 rounded-lg focus:ring focus:ring-indigo-400"
          />
        </div>

        {/* Category */}
        <div>
          <label className="block mb-1 font-medium">Category</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
            className="w-full border px-3 py-2 rounded-lg focus:ring focus:ring-indigo-400"
          >
            <option value="">Select category</option>
            <option value="Engineering">Engineering</option>
            <option value="Marketing">Marketing</option>
            <option value="Design">Design</option>
            <option value="Finance">Finance</option>
            <option value="IT">IT</option>
          </select>
        </div>

        {/* Job Type */}
        <div>
          <label className="block mb-1 font-medium">Job Type</label>
          <select
            name="jobType"
            value={formData.jobType}
            onChange={handleChange}
            required
            className="w-full border px-3 py-2 rounded-lg focus:ring focus:ring-indigo-400"
          >
            <option value="">Select type</option>
            <option value="Full-time">Full-time</option>
            <option value="Part-time">Part-time</option>
            <option value="Contract">Contract</option>
            <option value="Internship">Internship</option>
          </select>
        </div>

        {/* Location */}
        <div>
          <label className="block mb-1 font-medium">Location</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
            className="w-full border px-3 py-2 rounded-lg focus:ring focus:ring-indigo-400"
          />
        </div>

        {/* Job Description */}
        <div>
          <label className="block mb-1 font-medium">Job Description</label>
          <textarea
            name="jobDescription"
            value={formData.jobDescription}
            onChange={handleChange}
            rows={4}
            required
            className="w-full border px-3 py-2 rounded-lg focus:ring focus:ring-indigo-400"
          />
        </div>

        {/* Requirement Skill (comma separated) */}
        <div>
          <label className="block mb-1 font-medium">Requirement Skills</label>
          <textarea
            name="requirementSkill"
            value={formData.requirementSkill}
            onChange={handleChange}
            rows={3}
            placeholder="e.g. React, Node.js, Communication..."
            className="w-full border px-3 py-2 rounded-lg focus:ring focus:ring-indigo-400"
          />
          <p className="text-sm text-gray-500">Separate with commas</p>
        </div>

        {/* Key Responsibility (comma separated) */}
        <div>
          <label className="block mb-1 font-medium">Key Responsibilities</label>
          <textarea
            name="keyResponsibility"
            value={formData.keyResponsibility}
            onChange={handleChange}
            rows={3}
            placeholder="e.g. Build UI, manage API calls..."
            className="w-full border px-3 py-2 rounded-lg focus:ring focus:ring-indigo-400"
          />
          <p className="text-sm text-gray-500">Separate with commas</p>
        </div>

        {/* Education Level */}
        <div>
          <label className="block mb-1 font-medium">Education Level</label>
          <select
            name="educationLevel"
            value={formData.educationLevel}
            onChange={handleChange}
            required
            className="w-full border px-3 py-2 rounded-lg focus:ring focus:ring-indigo-400"
          >
            <option value="">Select level</option>
            <option value="High School">High School</option>
            <option value="Diploma">Diploma</option>
            <option value="Bachelor">Bachelor</option>
            <option value="Master">Master</option>
            <option value="PhD">PhD</option>
          </select>
        </div>

        {/* Experience */}
        <div>
          <label className="block mb-1 font-medium">Experience</label>
          <input
            type="text"
            name="experience"
            value={formData.experience}
            onChange={handleChange}
            placeholder="e.g. 2+ years"
            className="w-full border px-3 py-2 rounded-lg focus:ring focus:ring-indigo-400"
          />
        </div>



        {/* Status */}
        <div>
          <label className="block mb-1 text-sm font-medium">Status</label>
          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
          >
            <option value="active">Active</option>
            <option value="closed">Closed</option>
          </select>
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          {isLoading ? "Saving..." : "Save Changes"}
        </button>
      </form>
      <Footer/>
    </div>
    </>
  );
};

export default EditJobPage;
