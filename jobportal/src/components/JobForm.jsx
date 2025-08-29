// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faSave } from "@fortawesome/free-solid-svg-icons";
// import { useAddNewJobMutation, useUpdateJobMutation } from "../features/Jobs/jobsApiSlice";
// import useAuth from "../hooks/useAuth";

// const JobForm = ({ job }) => {
//   const { userId } = useAuth();
//   const navigate = useNavigate();
// import React, { useState, useEffect } from "react";
// import { useNavigate, useLocation, useParams } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faSave } from "@fortawesome/free-solid-svg-icons";
// import { useAddNewJobMutation, useUpdateJobMutation, useGetJobByIdQuery } from "../features/Jobs/jobsApiSlice";
// import useAuth from "../hooks/useAuth";

// const JobForm = () => {
//   const { userId } = useAuth();
//   const navigate = useNavigate();
//   const location = useLocation();
//   const { id } = useParams();

//   const passedJob = location.state?.job; // ✅ comes from navigate
//   // ✅ fetch if refreshed

//   const job = passedJob || fetchedJob; // ✅ prefer passed, fallback to API
// const JobDetailsPage = () => {
//   const { jobId } = useParams();
//   const location = useLocation();

//   // Always call hooks at the top level
//   const jobFromStore = useSelector((state) => selectJobById(state, jobId));
//   const allJobs = useSelector(selectAllJobs); // normalized array of jobs

//   const [job, setJob] = useState(location.state?.job || jobFromStore || null);

//   useEffect(() => {
//     if (!job && jobFromStore) {
//       setJob(jobFromStore);
//     }
//   }, [jobFromStore, job]);
//   const [addNewJob, { isSuccess: isCreateSuccess }] = useAddNewJobMutation();
//   const [updateJob, { isSuccess: isUpdateSuccess }] = useUpdateJobMutation();

//   const [formData, setFormData] = useState({
//     title: "",
//     companyName: "",
//     salary: "",
//     category: "",
//     jobType: "",
//     location: "",
//     jobDescription: "",
//     requirementSkill: "",
//     keyResponsibility: "",
//     educationLevel: "",
//     experience: "",
//   });

//   // ✅ prefill if editing
//   useEffect(() => {
//     if (job) {
//       setFormData({ ...job });
//     }
//   }, [job]);

//   // ✅ redirect after success
//   useEffect(() => {
//     if (isCreateSuccess || isUpdateSuccess) {
//       navigate("/jobs");
//     }
//   }, [isCreateSuccess, isUpdateSuccess, navigate]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const canSave = Object.values(formData).every(Boolean);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!canSave) return;

//     if (job?._id) {
//       // ✅ update mode
//       await updateJob({ id: job._id, ...formData });
//     } else {
//       // ✅ create mode
//       await addNewJob({ user: userId, ...formData });
//     }
//   };



//   const [addNewJob, { isSuccess: isCreateSuccess }] = useAddNewJobMutation();
//   const [updateJob, { isSuccess: isUpdateSuccess }] = useUpdateJobMutation();

//   const [formData, setFormData] = useState({
//     title: "",
//     companyName: "",
//     salary: "",
//     category: "",
//     jobType: "",
//     location: "",
//     jobDescription: "",
//     requirementSkill: "",
//     keyResponsibility: "",
//     educationLevel: "",
//     experience: "",
//   });

//   // ✅ prefill if editing
//   useEffect(() => {
//     if (job) {
//       setFormData({ ...job });
//     }
//   }, [job]);

//   // ✅ redirect after success
//   useEffect(() => {
//     if (isCreateSuccess || isUpdateSuccess) {
//       navigate("/jobs");
//     }
//   }, [isCreateSuccess, isUpdateSuccess, navigate]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const canSave = Object.values(formData).every(Boolean);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!canSave) return;

//     if (job) {
//       // ✅ update mode
//       await updateJob({ id: job._id, ...formData });
//     } else {
//       // ✅ create mode
//       await addNewJob({ user: userId, ...formData });
//     }
//   };

//   return (
//     <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow">
//       <h2 className="text-2xl font-bold mb-6">
//         {job ? "Edit Job" : "Create a New Job"}
//       </h2>

//       <form onSubmit={handleSubmit} className="space-y-4">
//         {/* repeat all your inputs here, unchanged */}
//         <div>
//           <label className="block mb-1 font-medium">Job Title</label>
//           <input
//             type="text"
//             name="title"
//             value={formData.title}
//             onChange={handleChange}
//             required
//             className="w-full border px-3 py-2 rounded-lg focus:ring focus:ring-indigo-400"
//           />
//         </div>
//      {/* Location */}
//         <div>
//           <label className="block mb-1 font-medium">Location</label>
//           <input
//             type="text"
//             name="location"
//             value={formData.location}
//             onChange={handleChange}
//             required
//             className="w-full border px-3 py-2 rounded-lg focus:ring focus:ring-indigo-400"
//           />
//         </div>

//         {/* Job Description */}
//         <div>
//           <label className="block mb-1 font-medium">Job Description</label>
//           <textarea
//             name="jobDescription"
//             value={formData.jobDescription}
//             onChange={handleChange}
//             rows={4}
//             required
//             className="w-full border px-3 py-2 rounded-lg focus:ring focus:ring-indigo-400"
//           />
//         </div>

//         {/* Requirement Skill */}
//         <div>
//           <label className="block mb-1 font-medium">Requirement Skills</label>
//           <textarea
//             name="requirementSkill"
//             value={formData.requirementSkill}
//             onChange={handleChange}
//             rows={3}
//             placeholder="e.g. React, Node.js, Communication..."
//             className="w-full border px-3 py-2 rounded-lg focus:ring focus:ring-indigo-400"
//           />
//         </div>

//         {/* Key Responsibility */}
//         <div>
//           <label className="block mb-1 font-medium">Key Responsibilities</label>
//           <textarea
//             name="keyResponsibility"
//             value={formData.keyResponsibility}
//             onChange={handleChange}
//             rows={3}
//             placeholder="e.g. Build UI, manage API calls..."
//             className="w-full border px-3 py-2 rounded-lg focus:ring focus:ring-indigo-400"
//           />
//         </div>

//         {/* Education Level */}
//         <div>
//           <label className="block mb-1 font-medium">Education Level</label>
//           <input
//             type="text"
//             name="educationLevel"
//             value={formData.educationLevel}
//             onChange={handleChange}
//             placeholder="e.g. Bachelor’s Degree in Computer Science"
//             className="w-full border px-3 py-2 rounded-lg focus:ring focus:ring-indigo-400"
//           />
//         </div>

//         {/* Experience */}
//         <div>
//           <label className="block mb-1 font-medium">Experience</label>
//           <input
//             type="text"
//             name="experience"
//             value={formData.experience}
//             onChange={handleChange}
//             placeholder="e.g. 2+ years"
//             className="w-full border px-3 py-2 rounded-lg focus:ring focus:ring-indigo-400"
//           />
//         </div>

//         <button
//           type="submit"
//           disabled={!canSave}
//           className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-lg font-medium transition flex justify-center items-center gap-2"
//         >
//           <FontAwesomeIcon icon={faSave} /> {job ? "Update Job" : "Create Job"}
//         </button>
//       </form>
//     </div>
//   );
// };

// export default JobForm;
