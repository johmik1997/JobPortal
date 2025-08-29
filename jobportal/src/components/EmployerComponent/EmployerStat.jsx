import React from "react";

const EmployerStats = () => {
  // Placeholder stats
  const stats = [
    { title: "Active Jobs", value: 5 },
    { title: "Applications Received", value: 23 },
    { title: "Closed Jobs", value: 2 },
  ];

  return (
    <aside className="w-64 space-y-4">
      {stats.map((stat, idx) => (
        <div key={idx} className="bg-white p-4 rounded shadow text-center">
          <p className="text-gray-500">{stat.title}</p>
          <p className="text-2xl font-bold">{stat.value}</p>
        </div>
      ))}
    </aside>
  );
};

export default EmployerStats;
