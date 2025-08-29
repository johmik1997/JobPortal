import React from "react";
import { Briefcase, Clock, MapPin, DollarSign, GraduationCap, Award } from "lucide-react";

const JobOverview = ({ job }) => {
  const overviewItems = [
    { icon: <Briefcase className="w-5 h-5 text-blue-500" />, label: "Job Title", value: job.title },
    { icon: <Clock className="w-5 h-5 text-green-500" />, label: "Job Type", value: job.jobType },
    { icon: <Briefcase className="w-5 h-5 text-purple-500" />, label: "Category", value: job.category },
    { icon: <Award className="w-5 h-5 text-yellow-500" />, label: "Experience", value: job.experience || "N/A" },
    { icon: <GraduationCap className="w-5 h-5 text-indigo-500" />, label: "Degree", value: job.educationLevel || "N/A" },
    { icon: <DollarSign className="w-5 h-5 text-green-600" />, label: "Salary", value: job.salary },
    { icon: <MapPin className="w-5 h-5 text-red-500" />, label: "Location", value: job.location },
  ];

  return (
    <aside className="bg-white p-6 rounded-xl shadow-md border border-gray-200 mb-6">
      <h3 className="text-xl font-bold mb-5 border-b pb-2 text-gray-900">Job Overview</h3>
      <ul className="space-y-3 text-gray-700">
        {overviewItems.map((item, idx) => (
          <li key={idx} className="flex items-center gap-3">
            {item.icon}
            <span className="font-semibold">{item.label}:</span>
            <span className="text-gray-600">{item.value}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default JobOverview;
