import React from "react";
import { CheckCircle } from "lucide-react"; // optional icon for bullets

const JobDescription = ({ description, responsibilities, skills }) => {
  return (
    <section className="mb-10 bg-white shadow-md rounded-lg p-6 border border-gray-200">
      <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b pb-2">Job Description</h2>
      <p className="text-gray-700 mb-6 leading-relaxed">{description}</p>

      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-3 text-gray-800">Key Responsibilities</h3>
        <ul className="space-y-2 text-gray-600">
          {responsibilities.map((item, idx) => (
            <li key={idx} className="flex items-start">
              <CheckCircle className="w-5 h-5 text-green-500 mt-1 mr-2 flex-shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-3 text-gray-800">Professional Skills</h3>
        <ul className="grid grid-cols-2 md:grid-cols-3 gap-2 text-gray-600">
          {skills.map((item, idx) => (
            <li
              key={idx}
              className="bg-gray-100 px-3 py-1 rounded-full text-sm flex items-center"
            >
              <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default JobDescription;
