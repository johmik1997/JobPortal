import React, { useState } from "react";

const JobFilters = ({ filters, setFilters }) => {
  const handleChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  return (
    <aside className="w-72 p-4 border-r border-gray-200">
      {/* 🔍 Search */}
      <div className="mb-6">
        <label className="block text-sm font-medium mb-2">
          Search by Job Title
        </label>
        <input
          type="text"
          name="title"
          placeholder="Job title or company"
          value={filters.title}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
        />
      </div>

      {/* 📍 Location */}
      <div className="mb-6">
        <label className="block text-sm font-medium mb-2">Location</label>
        <input
          type="text"
          name="location"
          placeholder="Enter city or country"
          value={filters.location}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
        />
      </div>

      {/* 📂 Category */}
      <div className="mb-6">
        <p className="block text-sm font-medium mb-2">Category</p>
        {["Commerce", "Telecommunications", "Hotels & Tourism", "Education", "Financial Services"].map((cat) => (
          <label key={cat} className="flex items-center mb-1 text-sm">
            <input
              type="radio"
              name="category"
              value={cat}
              checked={filters.category === cat}
              onChange={handleChange}
              className="mr-2"
            />
            {cat}
          </label>
        ))}
      </div>

      {/* 💼 Job Type */}
      <div className="mb-6">
        <p className="block text-sm font-medium mb-2">Job Type</p>
        {["Full-time", "Part-time", "Contract", "Internship"].map((type) => (
          <label key={type} className="flex items-center mb-1 text-sm">
            <input
              type="radio"
              name="jobType"
              value={type}
              checked={filters.jobType === type}
              onChange={handleChange}
              className="mr-2"
            />
            {type}
          </label>
        ))}
      </div>

      {/* 🎓 Experience */}
      <div className="mb-6">
        <p className="block text-sm font-medium mb-2">Experience Level</p>
        {["No-experience", "Fresher", "Intermediate", "Expert"].map((level) => (
          <label key={level} className="flex items-center mb-1 text-sm">
            <input
              type="radio"
              name="experience"
              value={level}
              checked={filters.experience === level}
              onChange={handleChange}
              className="mr-2"
            />
            {level}
          </label>
        ))}
      </div>
    </aside>
  );
};

export default JobFilters;
