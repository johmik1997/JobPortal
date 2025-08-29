import React from "react";
import ApplicationForm from "../components/JobApplicationForm";

const JobApplicationPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-gray-800">Apply for this Job</h1>
          <p className="text-gray-600 mt-2">
            Fill out the form below to submit your application. Make sure all required
            fields are completed before submitting.
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-white shadow-lg rounded-2xl p-8">
          <ApplicationForm />
        </div>

        {/* Extra Info */}
        <div className="mt-8 text-center text-sm text-gray-500">
          <p>
            By submitting this form, you agree to our{" "}
            <a href="/terms" className="text-indigo-600 hover:underline">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="/privacy" className="text-indigo-600 hover:underline">
              Privacy Policy
            </a>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default JobApplicationPage;
