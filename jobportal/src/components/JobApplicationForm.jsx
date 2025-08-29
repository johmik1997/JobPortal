import React, { useState, useEffect } from "react"
import { useSelector } from "react-redux"
import { useNavigate, useParams, useLocation } from "react-router-dom"
import useAuth from "../hooks/useAuth"
import { useApplyJobMutation } from "../features/applications/applicationApiSlice"

const ApplicationForm = () => {
  const { userId, roles, username } = useAuth()
  const [applyJob, { isLoading, isSuccess, isError, error }] =
    useApplyJobMutation()

  const navigate = useNavigate()
  const token = useSelector((state) => state.auth.token)

  // ✅ hooks must be here, inside the component
  const { jobId: paramJobId } = useParams()
  const location = useLocation()
  const jobId = location.state?.jobId || paramJobId

  console.log("User:", { userId, roles, username, token, jobId })

  const [formData, setFormData] = useState({
    name: "",
    age: "",
    email: "",
    phoneNumber: "",
    education: "",
    experience: "",
    resume: null,
    portfolio: "",
    coverLetter: "",
  })

  // Reset form on success
  useEffect(() => {
    if (isSuccess) {
      setFormData({
        name: "",
        age: "",
        email: "",
        phoneNumber: "",
        education: "",
        experience: "",
        resume: null,
        portfolio: "",
        coverLetter: "",
      })
      navigate("/applications") // ✅ redirect to applications page
    }
  }, [isSuccess, navigate])

  // Handle form changes
  const handleChange = (e) => {
    const { name, value, type, files } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === "file" ? files[0] : value,
    }))
  }

  // Only allow submit if all required fields exist
  const canSave =
    formData.name &&
    formData.email &&
    formData.resume &&
    !isLoading

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault()
    if (canSave) {
      try {
        const applicationData = new FormData()
        applicationData.append("user", userId) // applicant ID
        applicationData.append("job", jobId)   // ✅ dynamic jobId

        Object.entries(formData).forEach(([key, value]) => {
          applicationData.append(key, value)
        })

        await applyJob(applicationData).unwrap()
      } catch (err) {
        console.error("Application failed:", err)
        alert(err?.data?.message || "Upload failed")
      }
    }
  }

  return (
    <div className="max-w-2xl mx-auto bg-white p-6 rounded-xl shadow">
      <h2 className="text-2xl font-bold mb-6">Job Application Form</h2>

      {isError && (
        <p className="text-red-600 mb-4">
          {error?.data?.message || "Failed to submit application"}
        </p>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name */}
        <div>
          <label className="block mb-1 font-medium">Full Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full border px-3 py-2 rounded-lg focus:ring focus:ring-indigo-400"
          />
        </div>

        {/* Age */}
        <div>
          <label className="block mb-1 font-medium">Age</label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            required
            className="w-full border px-3 py-2 rounded-lg focus:ring focus:ring-indigo-400"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block mb-1 font-medium">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full border px-3 py-2 rounded-lg focus:ring focus:ring-indigo-400"
          />
        </div>

        {/* Phone Number */}
        <div>
          <label className="block mb-1 font-medium">Phone Number</label>
          <input
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
            className="w-full border px-3 py-2 rounded-lg focus:ring focus:ring-indigo-400"
          />
        </div>

        {/* Education */}
        <div>
          <label className="block mb-1 font-medium">Education</label>
          <input
            type="text"
            name="education"
            value={formData.education}
            onChange={handleChange}
            required
            className="w-full border px-3 py-2 rounded-lg focus:ring focus:ring-indigo-400"
          />
        </div>

        {/* Experience */}
        <div>
          <label className="block mb-1 font-medium">Experience</label>
          <input
            type="text"
            name="experience"
            value={formData.experience}
            onChange={handleChange}
            required
            className="w-full border px-3 py-2 rounded-lg focus:ring focus:ring-indigo-400"
          />
        </div>

        {/* Resume Upload */}
        <div>
          <label className="block mb-1 font-medium">Resume (PDF/DOC)</label>
          <input
            type="file"
            name="resume"
            accept=".pdf,.doc,.docx"
            onChange={handleChange}
            required
            className="w-full"
          />
        </div>

        {/* Portfolio Link */}
        <div>
          <label className="block mb-1 font-medium">Portfolio Link (Optional)</label>
          <input
            type="url"
            name="portfolio"
            value={formData.portfolio}
            onChange={handleChange}
            placeholder="https://portfolio.com"
            className="w-full border px-3 py-2 rounded-lg focus:ring focus:ring-indigo-400"
          />
        </div>

        {/* Cover Letter */}
        <div>
          <label className="block mb-1 font-medium">Cover Letter (max 2000 words)</label>
          <textarea
            name="coverLetter"
            value={formData.coverLetter}
            onChange={handleChange}
            maxLength={2000}
            rows={6}
            required
            className="w-full border px-3 py-2 rounded-lg focus:ring focus:ring-indigo-400"
          />
          <p className="text-sm text-gray-500">
            {formData.coverLetter.split(" ").length} / 2000 words
          </p>
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={!canSave}
          className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg font-medium transition"
        >
          {isLoading ? "Submitting..." : "Submit Application"}
        </button>
      </form>
    </div>
  )
}

export default ApplicationForm
