import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useAddNewJobMutation } from "../features/Jobs/jobsApiSlice"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSave } from "@fortawesome/free-solid-svg-icons"
import useAuth from "../hooks/useAuth"  
import { useSelector } from "react-redux"

const CreateJobForm = () => {
  const { userId, roles, username } = useAuth() 
  const [addNewJob, { isLoading, isSuccess, isError, error }] =
    useAddNewJobMutation()
  const navigate = useNavigate()
  const token = useSelector((state) => state.auth.token)

  const [formData, setFormData] = useState({
    title: "",
    companyName: "",
    salary: "",
    category: "",
    jobType: "",
    location: "",
    jobDescription: "",
    requirementSkill: "",
    keyResponsibility: "",
    educationLevel: "",
    experience: "",
  })

  useEffect(() => {
    if (isSuccess) {
      setFormData({
        title: "",
        companyName: "",
        salary: "",
        category: "",
        jobType: "",
        location: "",
        jobDescription: "",
        requirementSkill: "",
        keyResponsibility: "",
        educationLevel: "",
        experience: "",
      })

      alert("Job created successfully!");
      navigate("/"); // redirect to home
    }
  }, [isSuccess, navigate])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const canSave = Object.values(formData).every(Boolean) && !isLoading

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (canSave) {
      await addNewJob({
        user: userId,
        ...formData,
        requirementSkill: formData.requirementSkill
          .split(",")
          .map((s) => s.trim())
          .filter(Boolean),
        keyResponsibility: formData.keyResponsibility
          .split(",")
          .map((s) => s.trim())
          .filter(Boolean),
      })
    }
  }

  return (
    <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow">
      <h2 className="text-2xl font-bold mb-6">Create a New Job</h2>
      <p className={isError ? "errmsg" : "offscreen"}>
        {error?.data?.message}
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Title */}
        <div>
          <label className="block mb-1 font-medium">Job Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            className="w-full border px-3 py-2 rounded-lg focus:ring focus:ring-indigo-400"
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
<option value="IT">IT & Software</option>
<option value="Engineering">Engineering</option>
<option value="Marketing">Marketing & Sales</option>
<option value="Design">Design & Creative</option>
<option value="Finance">Finance & Accounting</option>
<option value="Healthcare">Healthcare & Medical</option>
<option value="Education">Education & Training</option>
<option value="Customer Service">Customer Service</option>
<option value="Construction">Construction & Real Estate</option>
<option value="Logistics">Logistics & Supply Chain</option>
<option value="Hospitality">Hospitality & Tourism</option>
<option value="Legal">Legal & Compliance</option>
<option value="Admin">Administration & HR</option>
<option value="Skilled Trades">Skilled Trades</option>

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

        {/* Submit */}
        <button
          type="submit"
          disabled={!canSave}
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-lg font-medium transition flex justify-center items-center gap-2"
        >
          <FontAwesomeIcon icon={faSave} /> Create Job
        </button>
      </form>
    </div>
  )
}

export default CreateJobForm
