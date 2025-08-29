import React from "react";
import CreateJobForm from "../components/JobCreateForm";

const CreateJobPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-3xl mx-auto">

        {/* Page Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-gray-800">Create a New Job</h1>
          <p className="text-gray-600 mt-2">
            Fill out the form below to add a new job posting. Make sure all required fields are completed.
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-white shadow-lg rounded-2xl p-8">
          <CreateJobForm />
        </div>

        {/* Extra Info / Notes */}
        <div className="mt-8 text-center text-sm text-gray-500">
          <p>
            Make sure to review the job details before creating the post.
          </p>
        </div>

      </div>
    </div>
  );
};

export default CreateJobPage;
