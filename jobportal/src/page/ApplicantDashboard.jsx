import React, { useMemo } from "react";
import { useGetUserApplicationsQuery } from "../features/applications/applicationApiSlice";
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import {
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../components/Hero";

const COLORS = ["#3B82F6", "#FACC15", "#22C55E", "#EF4444"]; // blue, yellow, green, red

const DeveloperDashboard = () => {
  const { userId, username } = useAuth();
  const { data: applications, isLoading, isSuccess, isError, error } =
    useGetUserApplicationsQuery(userId);

  const navigate = useNavigate();

  const apps = applications?.entities ? Object.values(applications.entities) : [];

  // Stats
  const stats = useMemo(() => {
    return {
      total: apps.length,
      pending: apps.filter((a) => a.status === "Pending").length,
      accepted: apps.filter((a) => a.status === "Accepted").length,
      rejected: apps.filter((a) => a.status === "rejected").length,
      applied: apps.filter((a) => a.status === "applied").length,
    };
  }, [apps]);

  // Chart Data
  const chartData = [
    { name: "Pending", value: stats.pending },
    { name: "Accepted", value: stats.accepted },
    { name: "Rejected", value: stats.rejected },
    { name: "Applied", value: stats.applied },
  ];

  return (
    <>
    <Header/>
  <Hero
  title="Developer Dashboard"
  subtitle="Track your job applications, monitor statuses, and manage your progress."
  bgImage={require("../img/home.jpeg")} // 👉 add a dashboard-specific image in /img
  showSearch={false}
/>

    <div className="p-6 bg-gray-50 min-h-screen">
      <h2 className="text-3xl font-bold mb-6">Welcome, {username}</h2>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-white p-4 rounded-xl shadow text-center">
          <h3 className="text-gray-600">Total Applications</h3>
          <p className="text-3xl font-bold text-blue-600">{stats.total}</p>
        </div>
        <div className="bg-white p-4 rounded-xl shadow text-center">
          <h3 className="text-gray-600">Pending</h3>
          <p className="text-3xl font-bold text-yellow-500">{stats.pending}</p>
        </div>
        <div className="bg-white p-4 rounded-xl shadow text-center">
          <h3 className="text-gray-600">Accepted</h3>
          <p className="text-3xl font-bold text-green-500">{stats.accepted}</p>
        </div>
        <div className="bg-white p-4 rounded-xl shadow text-center">
          <h3 className="text-gray-600">Rejected</h3>
          <p className="text-3xl font-bold text-red-500">{stats.rejected}</p>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-xl font-semibold mb-4">Applications Status (Bar)</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="value">
                {chartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index]} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-xl font-semibold mb-4">Applications Status (Pie)</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={chartData}
                cx="50%"
                cy="50%"
                outerRadius={100}
                dataKey="value"
                label
              >
                {chartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Applications Table */}
      <h3 className="text-xl font-semibold mb-2">Your Applications</h3>
      {isLoading && <p>Loading applications...</p>}
      {isError && (
        <p className="text-red-500">
          Error: {error?.data?.message || "Something went wrong"}
        </p>
      )}
      {isSuccess && stats.total === 0 && (
        <p className="text-gray-500">You haven't applied to any jobs yet.</p>
      )}

      {isSuccess && stats.total > 0 && (
        <table className="w-full border-collapse border border-gray-300 bg-white shadow rounded-xl">
          <thead>
            <tr className="bg-gray-200">
              <th className="border px-4 py-2">Job Title</th>
              <th className="border px-4 py-2">Company</th>
              <th className="border px-4 py-2">Status</th>
              <th className="border px-4 py-2">Applied Date</th>
              <th className="border px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {apps.map((app) => (
              <tr key={app.id} className="text-center hover:bg-gray-100">
                <td className="border px-4 py-2">{app.job?.title || "N/A"}</td>
                <td className="border px-4 py-2">{app.job?.companyName || "N/A"}</td>
                <td
                  className={`border px-4 py-2 font-semibold ${
                    app.status === "Accepted"
                      ? "text-green-600"
                      : app.status === "Rejected"
                      ? "text-red-600"
                      : "text-yellow-600"
                  }`}
                >
                  {app.status}
                </td>
                <td className="border px-4 py-2">
                  {new Date(app.createdAt).toLocaleDateString()}
                </td>
                <td className="border px-4 py-2">
                  <button
                    onClick={() => navigate(`/applications/${app.id}`)}
                    className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                  >
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
    <Footer/>
    </>
  );
};

export default DeveloperDashboard;
