import { useParams } from "react-router-dom";
import { useGetApplicationDetailsQuery } from "../features/applications/applicationApiSlice";

const ApplicationDetails = () => {
  const { id } = useParams();
  const { data: application, isLoading, isError } = useGetApplicationDetailsQuery(id);

  if (isLoading) return <p className="text-center text-blue-500">Loading...</p>;
  if (isError) return <p className="text-center text-red-500">Error fetching application</p>;

  return (
    <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-xl p-8 mt-10">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-2">
        Application Details
      </h2>

      <div className="grid grid-cols-2 gap-6">
        <div>
          <p className="text-sm text-gray-500">Applicant Name</p>
          <p className="font-medium">{application.name}</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Age</p>
          <p className="font-medium">{application.age || "N/A"}</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Email</p>
          <p className="font-medium">{application.email}</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Phone</p>
          <p className="font-medium">{application.phoneNumber || "N/A"}</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Education</p>
          <p className="font-medium">{application.education || "N/A"}</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Experience</p>
          <p className="font-medium">{application.experience || "N/A"}</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Status</p>
          <span
            className={`px-3 py-1 text-sm font-semibold rounded-lg ${
              application.status === "applied"
                ? "bg-blue-100 text-blue-600"
                : application.status === "shortlisted"
                ? "bg-green-100 text-green-600"
                : "bg-red-100 text-red-600"
            }`}
          >
            {application.status}
          </span>
        </div>
        <div>
          <p className="text-sm text-gray-500">Applied Job</p>
          <p className="font-medium">{application.job?.title}</p>
        </div>
      </div>

      <div className="mt-6">
        <p className="text-sm text-gray-500">Cover Letter</p>
        <p className="bg-gray-50 p-4 rounded-lg mt-2 text-gray-700">
          {application.coverLetter || "No cover letter provided."}
        </p>
      </div>

      <div className="mt-6 flex gap-4">
        <a
          href={application.resume}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
        >
          View Resume
        </a>
        {application.portfolio && (
          <a
            href={application.portfolio}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-gray-600 text-white rounded-lg shadow hover:bg-gray-700 transition"
          >
            View Portfolio
          </a>
        )}
      </div>
    </div>
  );
};

export default ApplicationDetails;
